# Challenge: Admin Registration

**Kategorie:** Unzureichende Eingabevalidierung (Mass Assignment)
**Schwierigkeit:** ⭐⭐⭐

## Beschreibung

Ziel dieser Challenge ist es, ein neues Benutzerkonto mit Administratorrechten zu registrieren. Dazu wird die an den Server gesendete Registrierungsanfrage manipuliert und ausgenutzt, dass die Anwendung Benutzereingaben nicht feldweise autorisiert.

## Schritte zur Reproduktion

1. Burp Suite als abfangenden Proxy einrichten und den Browser so konfigurieren, dass der Datenverkehr darüber läuft.
2. Die Juice-Shop-Anwendung im Browser mit Proxy öffnen.
3. Zur Registrierungsseite wechseln und die Standardfelder ausfüllen (E-Mail, Passwort, Passwortbestätigung, Sicherheitsfrage und Antwort).
4. In Burp Suite unter dem Tab Proxy „Intercept“ aktivieren.
5. Auf „Register“ klicken, um die Anfrage auszulösen und in Burp Suite abzufangen.
6. Im Body der abgefangenen Anfrage sieht die JSON-Nutzlast so aus:
```json
   {
     "email":"kazuto@kirigaya.sao",
     "password":"asdasdasd",
     "passwordRepeat":"asdasdasd",
     "securityQuestion":{
       "id":2,
       "question":"Mädchenname der Mutter?",
       "createdAt":"2026-09-10T13:54:24.816Z",
       "updatedAt":"2026-09-10T13:54:24.816Z"
     },
     "securityAnswer":"lmvbrmovbmr"
   }
```
7. Dem JSON-Body ein neues Feld hinzufügen, das im ursprünglichen Registrierungsformular nicht vorkommt: `"role":"admin"`.
8. Die geänderte Anfrage weiterleiten.
9. Die Anwendung antwortet mit der Meldung „Registration completed successfully“ und bestätigt damit, dass der Server die Anfrage akzeptiert hat.
10. Mit dem neu registrierten Konto einloggen und die Profilseite öffnen. Das Konto zeigt jetzt Administratorstatus, womit die Rechteausweitung erfolgreich war.

## Vorgehen bei der Entdeckung

Beim Abfangen der Registrierungsanfrage mit Burp Suite habe ich den JSON-Body Feld für Feld geprüft, nicht nur die im Registrierungsformular sichtbaren Felder (E-Mail, Passwort, Sicherheitsfrage), sondern die gesamte an den Server gesendete Nutzlast.

Dabei fragte ich mich, ob der Server überprüft, welche Felder in der Anfrage erlaubt sind, oder ob er einfach alle im JSON-Body vorhandenen Felder in das Datenbankobjekt übernimmt. Da das Objekt der Sicherheitsfrage bereits Metadatenfelder enthielt (`id`, `createdAt`, `updatedAt`), die ich nie manuell im Formular eingegeben hatte, wurde mir klar, dass der Server mehr Daten akzeptiert, als das Frontend dem Benutzer zeigt.

Darauf aufbauend habe ich dem Request-Body ein zusätzliches Feld `"role":"admin"` hinzugefügt, das im ursprünglichen Formular nicht vorkommt, um zu testen, ob der Server es ungeprüft akzeptiert und speichert. Das Weiterleiten der geänderten Anfrage bestätigte das: Mein Konto wurde mit Administratorrechten angelegt, ohne dass der Server serverseitig geprüft hätte, welche Felder ich setzen darf.

Nachdem feststand, dass der Server beliebige Felder akzeptiert, musste ich herausfinden, welcher Wert tatsächlich erhöhte Rechte gewährt. Gängige Namenskonventionen in rollenbasierten Systemen (etwa `admin`, `administrator` oder `superuser`) sind weithin bekannt und leicht zu erraten. Ich probierte daher `"admin"` als Wert für das Feld `role`, ein naheliegender erster Versuch, da dieses Namensmuster in Webanwendungen so durchgängig auftritt.

## Grundursache

Diese Schwachstelle ist ein klassisches Beispiel für **Mass Assignment**: Der Server nimmt die im Request-Body übermittelten Felder und schreibt sie direkt in das zugehörige Datenbankobjekt, ohne zu prüfen, ob der Client tatsächlich berechtigt ist, jedes dieser Felder zu setzen.

Das Feld `role` existiert im zugrunde liegenden Datenmodell (um normale Benutzer von Administratoren zu unterscheiden), wird aber im Frontend des Registrierungsformulars schlicht nicht angezeigt. Der Server geht fälschlich davon aus, dass ein in der Oberfläche verstecktes Feld auch vor Änderung geschützt ist. Statt eine explizite Whitelist der Felder durchzusetzen, die der Client setzen darf (z. B. nur `email`, `password`, `securityQuestion`, `securityAnswer`), akzeptiert und speichert er alles, was im Request-Body steht.

## Risiken und Folgen

Mass-Assignment-Schwachstellen sind besonders gefährlich, weil sie sich trivial ausnutzen lassen, außer einem abfangenden Proxy ist kein aufwendiges Werkzeug nötig, und dem Angreifer trotzdem eine vollständige Rechteausweitung ermöglichen. In einem realen System könnte diese Art von Schwachstelle einem Angreifer erlauben:

- sich bei der Kontoerstellung selbst Administrator- oder andere erhöhte Rollen zuzuweisen
- weitere sensible, nicht angezeigte Felder an jedem Objekt zu verändern, das Benutzereingaben annimmt (z. B. Kontostände, Berechtigungen, Eigentümer-Flags)
- die volle Kontrolle über die Anwendung zu erlangen, einschließlich Zugriff auf Daten anderer Benutzer, Administrationsfunktionen und Systemkonfiguration

Die übergeordnete Lehre: Backend-APIs müssen für jeden Endpunkt immer eine explizite **Whitelist erlaubter Eingabefelder** durchsetzen und dürfen nie davon ausgehen, dass das Ausblenden eines Feldes im Frontend irgendeine Sicherheit bietet. Alle Autorisierungsentscheidungen müssen serverseitig durchgesetzt werden.


## Gegenmaßnahmen

- Auf dem Registrierungsendpunkt eine explizite **Whitelist erlaubter Eingabefelder** durchsetzen: nur `email`, `password`, `passwordRepeat`, `securityQuestion` und `securityAnswer` akzeptieren und jede Anfrage mit zusätzlichen, unerwarteten Feldern ablehnen
- Die Rolle eines Benutzers nie aus Client-Eingaben ableiten. Die Standardrolle (mit den geringsten Rechten) wird bei der Kontoerstellung serverseitig vergeben, unabhängig vom Inhalt des Request-Bodys
- Für Rollenänderungen einen eigenen, autorisierten Prozess verlangen (z. B. ein bestehender Admin befördert einen Benutzer), statt Rollen als Teil der Selbstregistrierung setzbar zu machen
- Auf dem Backend eine Schemavalidierung anwenden (z. B. mit JSON Schema oder einer Validierungsbibliothek), die jeden Request-Body mit Feldern außerhalb des definierten Registrierungsschemas ablehnt

---
*Diese Dokumentation dient ausschließlich Lernzwecken im Rahmen einer strukturierten Sicherheitsschulung.*

# Challenge: Deluxe Fraud

**Kategorie:** Fehlerhafte Zugriffskontrolle (Fehler in der Geschäftslogik)
**Schwierigkeit:** ⭐⭐⭐

## Beschreibung

Ziel dieser Challenge ist es, eine Deluxe-Mitgliedschaft im Juice Shop zu erhalten, ohne dafür zu bezahlen. Dazu wird die an den Server gesendete Zahlungsanfrage manipuliert.

## Schritte zur Reproduktion

1. Burp Suite als abfangenden Proxy einrichten und den Browser so konfigurieren, dass der Datenverkehr darüber läuft.
2. Die Juice-Shop-Anwendung unter `127.0.0.1:3000/juiceshop` öffnen.
3. Ein neues Konto registrieren und einloggen.
4. Die Seitenleiste öffnen, „Deluxe Membership“ wählen und auf „Become a Member“ klicken.
5. Eine neue Zahlungskarte mit fiktiven Daten hinzufügen und auswählen.
6. Der Button „Pay“ erscheint in der Oberfläche deaktiviert. Das Button-Element mit den DevTools des Browsers untersuchen und die Attribute `mat-ripple-disabled` und `disabled="true"` entfernen, um ihn im Frontend zu aktivieren.
7. In Burp Suite unter dem Tab Proxy „Intercept“ aktivieren.
8. Auf „Pay“ klicken, um die Anfrage auszulösen und in Burp Suite abzufangen.
9. Im Body der abgefangenen Anfrage die JSON-Nutzlast suchen:
```json
    {"paymentMode":"card","paymentId":7}
```
10. Den Wert von `paymentMode` von `"card"` auf `"paid"` ändern.
11. Die geänderte Anfrage weiterleiten.
12. Die Anwendung bestätigt, dass die Deluxe-Mitgliedschaft gewährt wurde, und die Challenge wird im Score Board als gelöst markiert.

## Vorgehen bei der Entdeckung

Beim Durchlaufen des Deluxe-Mitgliedschaftsablaufs ist der Bezahlvorgang mehr als eine Interaktion mit der Oberfläche. Jeder Schritt, der Daten an den Server sendet, wurde mit Burp Suite untersucht, nicht nur die offensichtlich interaktiven Formularfelder.

Beim Abfangen der Zahlungsanfrage habe ich den JSON-Body auf Felder geprüft, deren Werte eine sicherheitsrelevante Aussage treffen, statt nur Benutzereingaben zu transportieren. Das Feld `paymentMode` fiel auf: Sein Wert (`"card"`) behauptet implizit, dass ein echtes Zahlungsmittel verwendet und verarbeitet wurde, statt neutrale Daten zu sein. Das warf die Frage auf, ob der Server die Zahlung tatsächlich gegen eine echte Transaktion prüft oder einfach jedem Wert vertraut, den der Client sendet.

Ich änderte `paymentMode` auf `"paid"` und leitete die Anfrage weiter. Das bestätigte die Vermutung: Der Server akzeptierte die Behauptung ohne jede Backend-Prüfung und gewährte die Deluxe-Mitgliedschaft, ohne dass je eine Zahlung stattfand.

## Grundursache

Die DevTools-Manipulation in den Schritten 6–7 umgeht nur **clientseitige Beschränkungen der Oberfläche** und ist nicht die eigentliche Schwachstelle. Sie ist lediglich der Weg, die Zahlungsanfrage zum Abfangen zugänglich zu machen. Der eigentliche Fehler ist, dass der Server dem Feld `paymentMode` vom Client **ohne serverseitige Validierung vertraut**. Es findet keine echte Zahlungsprüfung statt. Das Backend akzeptiert die Behauptung, dass gezahlt wurde, ohne sie gegen eine echte Transaktion zu prüfen.

## Risiken und Folgen

Das ist ein klassisches Beispiel für eine Schwachstelle in **Zugriffskontrolle und Geschäftslogik**: Der Server stützt Vertrauensentscheidungen auf vom Client gelieferte Daten, statt eigene Prüfungen durchzusetzen. In einem realen E-Commerce-System könnte diese Art von Schwachstelle Angreifern erlauben:

- kostenpflichtige Funktionen, Abos oder Produkte ohne Bezahlung zu erhalten
- Geschäftsregeln (z. B. Rabatte, Limits, Zugriffsstufen) durch Manipulation von Request-Parametern zu umgehen
- dem Unternehmen in großem Umfang direkten finanziellen Schaden zuzufügen, weil sich der Exploit trivial wiederholen und automatisieren lässt

Die übergeordnete Lehre: **Client-seitigen Eingaben darf man bei sicherheits- oder zahlungsrelevanten Entscheidungen nie vertrauen.** Jede kritische Geschäftslogik muss serverseitig geprüft und durchgesetzt werden.


## Gegenmaßnahmen

- Ein vom Client geliefertes Feld `paymentMode` oder einen Zahlungsstatus nie als Zahlungsnachweis akzeptieren. Alle Zahlungen serverseitig gegen die tatsächliche Antwort des Zahlungsanbieters prüfen
- Serverseitige Prüfungen einbauen, die bestätigen, dass eine Transaktion erfolgreich verarbeitet wurde (z. B. über Webhook oder Callback des Zahlungsanbieters), bevor eine kostenpflichtige Funktion oder Mitgliedschaft gewährt wird
- Den Checkout- bzw. Zahlungsablauf als mehrstufigen serverseitigen Zustandsautomaten behandeln, in dem jeder Schritt (Karte hinzugefügt, Zahlung gestartet, Zahlung bestätigt) im Backend unabhängig validiert und nicht aus Client-Eingaben abgeleitet wird
- Checkout- und Zahlungsendpunkte regelmäßig mit einem abfangenden Proxy testen, um jedes vom Client steuerbare Feld zu finden, das das Zahlungsergebnis beeinflusst


---
*Diese Dokumentation dient ausschließlich Lernzwecken im Rahmen einer strukturierten Sicherheitsschulung.*

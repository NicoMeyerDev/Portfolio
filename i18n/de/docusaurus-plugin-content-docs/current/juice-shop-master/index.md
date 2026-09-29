---
id: juice-shop-master
title: Juice Shop Master
sidebar_position: 5
---

# Juice Shop Master

:::info
Dieses Projekt dient ausschließlich meiner beruflichen Weiterbildung. Es werden keine personenbezogenen Daten, Zugangsdaten oder sensiblen Informationen verwendet. Die gesamte Arbeit findet auf einem Kali-Linux-Rechner statt.
:::

Dieses Projekt dokumentiert die Analyse und Ausnutzung ausgewählter Sicherheitslücken in der Anwendung OWASP Juice Shop. Alle Erkenntnisse, Demonstrationen und Exploit-Szenarien entstehen ausschließlich zu Lern- und Forschungszwecken in einer autorisierten Testumgebung.

## Projektübersicht

Dieses Repository enthält die Dokumentation von 2 Challenges aus dem OWASP Juice Shop. Jede Challenge steht für eine andere Art von Angriff.
Ziel des Projekts ist es, ausgewählte Angriffe gegen den fiktiven Shop durchzuführen, zu verstehen, wie und warum jeder Angriff funktioniert, die Risiken zu erkennen, die bei der Softwareentwicklung entstehen können, und abzuleiten, was zu ihrer Verhinderung zu beachten ist.

## Schnellstart

- VirtualBox herunterladen und installieren:

```bash
sudo apt update && sudo apt install -y virtualbox
```

- Eine virtuelle Maschine erstellen und Kali Linux installieren:
https://www.kali.org/get-kali/#kali-platforms

- Das Juice-Shop-Repository klonen:

```bash
git clone git@github.com:juice-shop/juice-shop.git && cd juice-shop   
```

- Abhängigkeiten installieren:

```bash
sudo apt update && sudo apt install -y nodejs npm    
```

- Juice Shop installieren und starten:

```bash
npm install && npm start
```
   

- Den Browser unter `127.0.0.1:3000` öffnen

- Die Challenges selbst ausprobieren

## Dokumentation der Challenges

### 1. Admin Registration

**Kategorie:** Unzureichende Eingabevalidierung (Mass Assignment)

Durch Manipulation der Registrierungsanfrage lässt sich ein neues Benutzerkonto mit Administratorrechten anlegen, einer Rolle, die über das normale Registrierungsformular nicht vergeben werden kann.

📄 [Vollständige Dokumentation](./admin-registration.md)

### 2. Deluxe Fraud

**Kategorie:** Fehlerhafte Zugriffskontrolle (Fehler in der Geschäftslogik)

Durch Manipulation der Zahlungsanfrage lässt sich eine Deluxe-Mitgliedschaft erhalten, ohne dass eine tatsächliche Zahlung verarbeitet wird.

📄 [Vollständige Dokumentation](./delux-fraud.md)

---
*Diese Dokumentation dient ausschließlich Lernzwecken im Rahmen einer strukturierten Sicherheitsschulung.*

**Technik:** IT-Sicherheit, Container

<!-- TODO: add architecture details, screenshots, and setup/quickstart instructions -->

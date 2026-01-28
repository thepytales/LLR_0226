// === js/modules/ui.js ===

export function initRightSidebar() {
    console.log("UI Modul geladen: Rechte Sidebar bereit.");
    
    // Hinweis: Die Toggle-Logik (Akkordeon) wird direkt über 
    // die globale Funktion togglePanel() im HTML gesteuert.
    // Das verhindert Konflikte beim Nachladen von DOM-Elementen.
}

// Hilfsfunktion: Aktualisiert den Inhalt eines UI-Containers (für Analyse-Ergebnisse)
export function updateAnalysisUI(containerId, htmlContent) {
    const container = document.getElementById(containerId);
    if(container) {
        container.innerHTML = htmlContent;
    }
}
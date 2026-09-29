# Task Manager

# Istruzioni chiare per avviare l'applicazione in locale
Il progetto non richiede configurazioni particolari. Una volta scaricata la cartella del progetto è sufficiente aprire il file index.html nel browser.

# Le tecnologie scelte e il motivo della scelta
HTML: per definire la struttura dell'applicazione.
CSS: per la gestione dello stile e rendere l'applicazione responsive.
JavaScript: per gestire la logica dell'applicazione.
localStorage: per mantenere i task salvati nel browser ricaricando la pagina.
Il progetto e le richieste erano contenuti, quindi ho scelto di limitare qualsiasi tipo di complessità inutile.

# Una breve descrizione di come hai affrontato il lavoro e delle principali decisioni prese
Ho definito struttura, stile e logica in tre file separati: 'index.html', 'style.css' e 'script.js'.
Ho scelto di associare a ogni task le seguenti informazioni: id, titolo, descrizione, data di scadenza, priorità e stato (completato o non).
Ho definito inizialmente le funzioni richieste e successivamente aggiunto qualche funzionalità.
Per la visualizzazione dei task ho utilizzato una funzione 'renderTasks()' che ricostruisce la lista dei task applicando la ricerca e il filtro.
Per la creazione di un nuovo task ho scelto un form visualizzabile con un pulsante 'New task'.
Per l'eliminazione del task ho scelto un pulsante 'Delete' nella card del task.
Per lo stato del task ho scelto di utilizzare una checkbox e barrare il titolo del task in caso di completamento.
Per rendere l'applicazione responsive ho utilizzato una media query CSS.
Dal punto di vista grafico ho scelto colori specifici per il pulsante 'Delete', le priorità, le date di scadenza passate e le checkbox dello stato, mantenendo il resto dell'interfaccia neutro.

# Cosa miglioreresti o aggiungeresti avendo più tempo
Avendo più tempo aggiungerei ulteriori funzionalità per rendere l'applicazione più completa come per esempio le seguenti:
- la possibilità di modificare un task esistente;
- l'ordinamento dei task per priorità, data di scadenza o data di creazione;
- il filtraggio per priorità;
- la conferma prima dell'eliminazione;
- un backend per la sincronizzazione tra diversi dispositivi.
Inoltre cercherei di migliorare l'applicazione da un punto di vista estetico che adesso risulta estremamente minimale.

# Gli eventuali strumenti di AI utilizzati e come li hai usati
Durante lo sviluppo ho utilizzato ChatGPT come strumento di supporto per ragionare sulla struttura iniziale dell'applicazione, per lo sviluppo del codice e per una revisione finale.

# Una breve descrizione delle funzionalità aggiuntive scelte
Ricerca testuale dei task che coinvolge titoli e descrizioni attraverso una search bar.
Filtri per stato dei task con dei pulsanti.
Persistenza dei dati ricaricando la pagina con il salvataggio nel localStorage.

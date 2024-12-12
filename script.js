// Dati JSON aggiornati con statistiche
data = [
    {
      "id": 1,
      "type": "VERIFIED",
      "imgUrl": "https://example.com/images/preview/1.png",
      "title": "Ligue 1: Lyon vs Reims",
      "description": "Game recap of the match.",
      "url": "https://example.com/highlight/29g9urg92387",
      "embedUrl": "https://example.com/embed/213123safas132e",
      "match": {
        "id": 489389,
        "round": "Regular Season - 32",
        "date": "2023-05-20T15:30:00.000Z",
        "country": {
          "code": "FR",
          "name": "France",
          "logo": "https://example.com/logos/country/FR.png"
        },
        "awayTeam": {
          "id": 553,
          "logo": "https://example.com/logos/team/553.png",
          "name": "Montpellier"
        },
        "homeTeam": {
          "id": 553,
          "logo": "https://example.com/logos/team/553.png",
          "name": "Montpellier"
        },
        "league": {
          "id": 133,
          "season": 2023,
          "name": "Ligue 1",
          "logo": "https://example.com/logos/league/133.png"
        },
        "state": {
          "description": "Second half",
          "clock": 67,
          "score": {
            "current": "3 - 1",
            "penalties": "6 - 4"
          }
        },
        "statistics": {
          "goals": {
            "home": 3,
            "away": 1
          },
          "corners": {
            "home": 5,
            "away": 3
          },
          "yellowCards": {
            "home": 2,
            "away": 1
          },
          "redCards": {
            "home": 0,
            "away": 1
          }
        }
      },
      "channel": "Ligue 1 Uber Eats",
      "source": "youtube"
    }
  ];
  
  // Funzione per creare la card della partita
  function createCard(matchData) {
      // Creare la card div
      let card = document.createElement('div');
      card.className = 'card';
  
      // Creare l'immagine per la card (logo del campionato o immagine del highlight)
      let img = document.createElement('img');
      img.setAttribute('src', matchData.imgUrl);
      img.setAttribute('alt', 'Match Image');
  
      // Creare il titolo della card
      let title = document.createElement('div');
      title.className = 'card-title';
      title.innerHTML = matchData.title;
  
      // Creare la descrizione della card
      let description = document.createElement('div');
      description.className = 'card-description';
      description.innerHTML = matchData.description;
  
      // Creare il punteggio e stato della partita
      let matchStatus = document.createElement('div');
      matchStatus.className = 'match-status';
      matchStatus.innerHTML = `Score: ${matchData.match.state.score.current} (Penalties: ${matchData.match.state.score.penalties}) - ${matchData.match.state.description}`;
  
      // Crea il pulsante per visualizzare ulteriori statistiche
      let statsButton = document.createElement('button');
      statsButton.className = 'stats-button';
      statsButton.innerHTML = "Show Match Stats";
  
      // Creare un'area nascosta per visualizzare le statistiche
      let statsContainer = document.createElement('div');
      statsContainer.className = 'stats-container';
      statsContainer.style.display = 'none';  // Area inizialmente nascosta
  
      // Aggiungere statistiche di gioco
      let goals = document.createElement('p');
      goals.innerHTML = `Goals: Home - ${matchData.match.statistics.goals.home}, Away - ${matchData.match.statistics.goals.away}`;
      
      let corners = document.createElement('p');
      corners.innerHTML = `Corners: Home - ${matchData.match.statistics.corners.home}, Away - ${matchData.match.statistics.corners.away}`;
      
      let yellowCards = document.createElement('p');
      yellowCards.innerHTML = `Yellow Cards: Home - ${matchData.match.statistics.yellowCards.home}, Away - ${matchData.match.statistics.yellowCards.away}`;
      
      let redCards = document.createElement('p');
      redCards.innerHTML = `Red Cards: Home - ${matchData.match.statistics.redCards.home}, Away - ${matchData.match.statistics.redCards.away}`;
  
      // Aggiungere le statistiche alla container
      statsContainer.appendChild(goals);
      statsContainer.appendChild(corners);
      statsContainer.appendChild(yellowCards);
      statsContainer.appendChild(redCards);
  
      // Funzione per mostrare/nascondere le statistiche quando il bottone viene cliccato
      statsButton.addEventListener('click', function() {
          if (statsContainer.style.display === 'none') {
              statsContainer.style.display = 'block';
          } else {
              statsContainer.style.display = 'none';
          }
      });
  
      // Appendere gli elementi alla card
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(matchStatus);
      card.appendChild(statsButton);
      card.appendChild(statsContainer);
  
      // Aggiungere la card al container
      let container = document.getElementById('cards-container');
      container.appendChild(card);
  }
  
  // Creare una card per il primo match nel JSON
  createCard(data[0]);
  
  
   
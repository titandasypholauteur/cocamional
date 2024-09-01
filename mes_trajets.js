var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'<head>'+
'    <meta charset="utf-8">'+
'    <title>Mes trajets</title>'+
'    <link rel="stylesheet" href="style.css">'+
'    <script>'+
'        document.addEventListener(\'DOMContentLoaded\', function () {'+
'            // Simulate some example data'+
'            const trips = ['+
'                { date: \'2024-09-01\', time: \'08:00\', departure: \'Paris\', destination: \'Lyon\', type: \'conducteur/conductrice\', status: \'validé\' },'+
'                { date: \'2024-09-03\', time: \'14:00\', departure: \'Marseille\', destination: \'Nice\', type: \'passager.e\', status: \'en attente de validation\' },'+
'                { date: \'2024-09-05\', time: \'09:30\', departure: \'Toulouse\', destination: \'Bordeaux\', type: \'conducteur/conductrice\', status: \'annulé\' }'+
'            ];'+
''+
'            const table = document.getElementById(\'tripsTable\');'+
''+
'            // Function to populate table'+
'            function populateTable() {'+
'                trips.forEach(trip => {'+
'                    const row = document.createElement(\'tr\');'+
''+
'                    row.innerHTML = `'+
'                        <td>${trip.date}</td>'+
'                        <td>${trip.time}</td>'+
'                        <td>${trip.departure}</td>'+
'                        <td>${trip.destination}</td>'+
'                        <td>'+
'                            <select name="type">'+
'                                <option value="conducteur/conductrice" ${trip.type === \'conducteur/conductrice\' ? \'selected\' : \'\'}>Conducteur/conductrice</option>'+
'                                <option value="passager.e" ${trip.type === \'passager.e\' ? \'selected\' : \'\'}>Passager.e</option>'+
'                            </select>'+
'                        </td>'+
'                        <td>'+
'                            <select name="statut">'+
'                                <option value="refus" ${trip.status === \'refusé\' ? \'selected\' : \'\'}>Refusé</option>'+
'                                <option value="attentvalid" ${trip.status === \'en attente de validation\' ? \'selected\' : \'\'}>En attente de validation</option>'+
'                                <option value="annule" ${trip.status === \'annulé\' ? \'selected\' : \'\'}>Annulé</option>'+
'                                <option value="valide" ${trip.status === \'validé\' ? \'selected\' : \'\'}>Validé</option>'+
'                                <option value="realise" ${trip.status === \'réalisé\' ? \'selected\' : \'\'}>Réalisé</option>'+
'                            </select>'+
'                        </td>'+
'                    `;'+
'                    table.appendChild(row);'+
'                });'+
'            }'+
''+
'            populateTable();'+
'        });'+
'    </script>'+
'</head>'+
'<body>'+
'    <section style="text-align: center;">'+
'        <button><a href="premiere_paj.html">Retour accueil</a></button>'+
'        <button><a href="mon_profil.html">Retour mon profil</a></button>'+
'    </section>'+
''+
'    <main>'+
'        <h1 style="text-align: center;">Mes trajets</h1><br />'+
''+
'        <table>'+
'            <thead>'+
'                <tr>'+
'                    <th>Date</th>'+
'                    <th>Horaire</th>'+
'                    <th>Départ</th>'+
'                    <th>Destination</th>'+
'                    <th>Type</th>'+
'                    <th>Statut</th>'+
'                </tr>'+
'            </thead>'+
'            <tbody id="tripsTable">'+
'                <!-- Les trajets seront injectés ici via JavaScript -->'+
'            </tbody>'+
'        </table>'+
'    </main>'+
'</body>'+
'</html>';
var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'<head>'+
'    <meta charset="utf-8">'+
'    <title>Pseudo</title>'+
'    <link rel="stylesheet" href="style.css">'+
'    <script>'+
'        document.addEventListener(\'DOMContentLoaded\', function () {'+
'            // Fonction pour gérer l\'upload d\'image'+
'            document.querySelector(\'input[type="file"]\').addEventListener(\'change\', function (event) {'+
'                const file = event.target.files[0];'+
'                if (file) {'+
'                    const reader = new FileReader();'+
'                    reader.onload = function (e) {'+
'                        document.getElementById(\'profileImage\').src = e.target.result;'+
'                    };'+
'                    reader.readAsDataURL(file);'+
'                }'+
'            });'+
''+
'            // Fonction pour modifier la bio, les notes, etc.'+
'            document.getElementById(\'editButton\').addEventListener(\'click\', function () {'+
'                const bio = document.getElementById(\'bio\');'+
'                const isEditing = bio.contentEditable === "true";'+
''+
'                bio.contentEditable = !isEditing;'+
'                this.textContent = isEditing ? \'Modifier\' : \'Enregistrer\';'+
''+
'                if (!isEditing) {'+
'                    alert("Les modifications ont été enregistrées !");'+
'                    // Ici, vous pouvez ajouter du code pour envoyer les données mises à jour au serveur'+
'                }'+
'            });'+
'        });'+
'    </script>'+
'</head>'+
'<body>'+
'    <h1 style="text-align: center;">Pseudo</h1><br />'+
''+
'    <section style="text-align: left;">'+
'        <input type="file" name="photo[]" accept="image/*" required>'+
'        <img id="profileImage" src="" alt="Votre photo de profil" width="100" height="100" style="display: block; margin-top: 10px;">'+
'    </section>'+
''+
'    <section style="text-align: center;">'+
'        <button><a href="cocamional_questcequecest.html">Cocamional qu\'est-ce que c\'est ?</a></button>'+
'        <button><a href="mes_trajets.html">Mes trajets</a></button>'+
'        <button><a href="stations.html">Stations</a></button>'+
'        <button><a href="premiere_paj.html">Retour accueil</a></button>'+
'    </section>'+
''+
'    <section style="text-align: right;">Invitations DM | Notifications</section>'+
'    <section style="text-align: right;"><button><a href="parametres.html">Paramètres</a></button></section>'+
''+
'    <main>'+
'        <p style="text-align: center;">Mes conducteurs/conductrices</p>'+
'        <p style="text-align: center;">Mes passager.e.s</p>'+
'        <p style="text-align: center;">Note</p>'+
'        <p style="text-align: center;">Commentaires</p>'+
''+
'        <p style="text-align: center;" id="bio">Ma bio: Voici une courte description de moi...</p>'+
'        <section style="text-align: center;">'+
'            <button id="editButton">Modifier</button><br /><br />'+
'        </section>'+
''+
'        <section style="text-align: center;">'+
'            <button>Te déconnecter</button>'+
'        </section>'+
'    </main>'+
'</body>'+
'</html>';
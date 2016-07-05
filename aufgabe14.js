// Erstelle eine Zufallszahl zwischen 1 und 100. Hier nichts aendern
let randomNumber = Math.floor(Math.random() * 100 + 1);

// TODO 1: Initalisieren Sie nach dieser Zeile eine Variable für die Versuchsanzahl.
let n;


$("#user-input").val("");
$("#input_k").val("");
$("#input_result").val("");
$("#user-input").prop("readonly",true);
$("#btn_check").prop("disabled",true);


/**
 * TODO 2: Erstellen Sie ein on-Click-Event für den Start-Button.
 * TODO 3: Setzen Sie den Versuchszähler auf 7 zurück (vergessen Sie dabei die Versuchsvariable nicht!).
 * TODO 4: Leeren Sie das Resultatsfeld.
 */
$("#btn_start").on("click", function(){
	n = 7;
	randomNumber = Math.floor(Math.random() * 100 + 1);
	$("#input_k").val(n + " Versuche verbleiben");
	$("#input_result").val("");
	$("#user-input").val("");
	$("#user-input").prop("readonly",false);
	$("#btn_check").prop("disabled",false);
	//$("body").css("background-color","white");
	$("#list-content").empty();
	
});


/**
 * TODO 5: Erstellen Sie ein on-Click-Event für den Check-Button
 * TODO 6: Lesen Sie den User-Input in eine Variable ein. Nutzen Sie zum auslesen folgende Codezeile (nach dem Sternchen):
 * $("#user-input").val();
 *
 * TODO 7: Überprüfen Sie die verschiedenen Bedindungen, die eintreten können. Geben entsprechende Nachrichten
 * und manipulieren Sie die Versuchszählervariable und das dazugehörige Feld dementsprechend.
 *
 * TODO 8: Sollte der Wert der Versuchszählervariable auf 0 fallen, geben Sie eine Nachricht aus, dass der Spieler verloren hat.
 */
$("#btn_check").on("click", function(){
	let guess = $("#user-input").val();
	n = n - 1;
	$("#input_k").val(n + " Versuche verbleiben");

	if (guess == randomNumber)
	{
		$("#list-content").append(
			$("<li>").attr({class: "list-group-item",
				style: "background-color: #5cb85c;"
				}).append("Die Zahl wurde erraten!").append(
					$("<span>").attr("class", "badge").append(7-n)
			)
		);
		//$("#input_result").val("Die Zahl wurde erraten. Benötigte Versuche: " + (7-n));
		$("#user-input").prop("readonly",true);
		$("#btn_check").prop("disabled",true);
		//$("body").css("background-color","green");
	}

	else if (guess > randomNumber)
	{
		$("#list-content").append(
			$("<li>").attr("class", "list-group-item").append("Die gesuchte Zahl ist kleiner").append(
				$("<span>").attr("class", "badge").append(7-n)
			)
		);
		//$("#input_result").val("Die gesuchte Zahl ist kleiner");
	}

	else if (guess < randomNumber)
	{
		$("#list-content").append(
			$("<li>").attr("class", "list-group-item").append("Die gesuchte Zahl ist größer").append(
				$("<span>").attr("class", "badge").append(7-n)
			)
		);
		//$("#input_result").val("Die gesuchte Zahl ist größer");
	}


	if (n == 0 & guess != randomNumber)
	{
		$("#list-content li:last").remove();
		$("#list-content").append(
			$("<li>").attr({
				class: "list-group-item",
				style: "background-color: #d9534f;"
				}).append("Leider verloren! Versuch es nochmal!").append(
					$("<span>").attr("class", "badge").append(7-n)
			)
		);
		//$("#input_result").val("Leider verloren! Versuch es nochmal!");
		$("#user-input").prop("readonly",true);
		$("#btn_check").prop("disabled",true);
		//$("body").css("background-color","red");	
	}
});


/*
Durch halbieren der Längen der gefragten Intervalle [a,b], also (b-a)/2, und Ausschlussverfahren
(größer/kleiner) kann man eine zufällige im Intervall [a,b] liegende Zahl 'eingrenzen' und letztlich
genau bestimmen. Bei einem Intervall von [1,100] braucht man mit diesem Verfahren maximal 7 Versuche, 
um eine zufällige Zahl genau zu bestimmen.
*/
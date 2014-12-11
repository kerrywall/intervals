var intervalApp = {};

intervalApp.notes = ["A","B","C","D","E","F","G","A#","B#","C#","D#","E#","F#","G#","Ab","Bb","Cb","Db","Eb","Fb","Gb"];
intervalApp.intervals = ["P1", "m2", "M2", "m3", "M3", "P4", "A4", "d5", "P5", "A5", "m6", "M6", "m7", "M7"];

intervalApp.randomize = function() {
	randomNote = intervalApp.notes[Math.floor(Math.random()*intervalApp.notes.length)];
	randomInterval = intervalApp.intervals[Math.floor(Math.random()*intervalApp.intervals.length)];
}

intervalApp.init = function() {
	intervalApp.randomize();

	startingNote = teoria.note(randomNote);
	interval = teoria.interval(startingNote, randomInterval);
	$('.interval').html(startingNote.toString() + ' &#8594; ' + interval.toString());
}

$('document').ready(function() {
	intervalApp.init();

	$('.quality').on('click', function(r) {
		quality = r.target.value;
	});

	$('#answer').on('submit', function(e) {
		e.preventDefault();
		yourAnswer = quality + e.currentTarget[5].value;

		$('.answer').html("You said " + yourAnswer + ". ");

		if (yourAnswer === randomInterval) {
			$('.answer').append("<span class='right'>&#10004;</span> Yep! ");
		} else {
			$('.answer').append("<span class='wrong'>&#10007;</span> Nooo! ")
		}

		$('.answer').append('<span class="notes">' + startingNote.toString() + '</span> to ' + '<span class="notes">' + interval.toString() + '</span> is ' + randomInterval + '.');

		intervalApp.init();
		e.currentTarget[5].value = "";

	});

});

$('.brise-upload > label').find('input').change(function() {
		var file = this.files;
	$('.brise-upload > label').text('Selected file: ' + file[0].name);
})
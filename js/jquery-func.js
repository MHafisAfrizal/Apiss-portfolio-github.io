$( document ).ready( function(){
	var IS_IE_6 = $.browser.msie && $.browser.version < 7;
	
	$('.portfolio').jcarousel({ scroll: 1, wrap: 'both' });
	$('#latest-projects-bg').jcarousel({ scroll: 1, wrap: 'both' });	
	
	$('.latest-project-button').click(function(){
		
		if( !IS_IE_6 ) {
			$(this).animate({ 'top' : (top_latest+20) + 'px', 'opacity': 0 }, 'slow', function(){
				$('.latest-project-button').hide();
				
				$('#latest-projects')
					.css({'opacity' : 0, 'visibility': 'visible'})
					.show()
					.animate({ 'top' : (top_window+20) + 'px', 'opacity': 1 }, 'slow');
			});
		}else {
			$(this).hide();
			$('#latest-projects').css({ 'visibility': 'visible' });
		}
		
		return false;
	});
	
	$('.close').click(function(){
		if( !IS_IE_6 ) {
			$('#latest-projects').animate({ 'top': top_window + 'px', 'opacity': 0 }, 'slow', function(){
				$('#latest-projects').hide();
				$('.latest-project-button')
					.css({'opacity' : 0})
					.show()
					.animate({ 'top': top_latest + 'px', 'opacity': 1 }, 'slow', function(){});
				
			});
		}else {
			$('#latest-projects').css({ 'visibility': 'hidden' });
			$('.latest-project-button').show();
		}
		
		return false;	
	});
	
	
	$('#navigation-handler').hover(
		function(){ $('#navigation').animate({ 'top' : '20px' }); },
		function(){ $('#navigation').animate({ 'top' : '-20px' }); }
	);
	
	$('#navigation a').click(function(){
		var to = $(this).attr('href');
		$.scrollTo(to, 1200);
		return false;
	});
});

	document.querySelector('.tech-title').addEventListener('click', function() {
		this.style.transition = 'transform 0.1s';
		this.style.transform = 'scale(1.05)';
		setTimeout(() => this.style.transform = 'scale(1)', 100); // Balik ke normal
		// Opsional: Tambah suara (butuh file)
		var clickSound = new Audio('click.wav');
		clickSound.play().catch(err => console.log("Suara gagal: ", err));
	});

	

var top_latest = 250;
var top_window = 150;
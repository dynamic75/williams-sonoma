
$(document).on('ready', function(){
	/*
		ideally, most of the page content would come from an external source, like a json file and be appended to the document, either on load or before render,
		if it was being served as a jsp.
	*/

	(function wsapp() {
		var mainProduct = $('#lg-apron-image'),
			productColor = $('#item-color'),
			collapsibleHeader = $('.collapsible_header').on('click', collapseContent);
			productThumbs = $('.product-thumb').on('click', switchProductImage);
			addToCardButton = $('#add-to-cart').on('click', displayCartModal);
			modal = $('#modal'),
			modalContent = modal.find('#modal-content')
			closeModal = modal.find('#close-modal').on('click', closeModal),
			productDescription = $('#item-nav-description');


		// click handler for product thumbnails
		function switchProductImage(e) {
			let thumb = $(e.target);
			productThumbs.removeClass('active');
			thumb.addClass('active');
			mainProduct.attr('src', `images/${thumb.data('thumb')}`);
			// update text in product breadcrumb description
			productColor.html(thumb.data('color'));
		}

		function collapseContent(e) {
			let header = $(e.target),
				classCollapsed = 'header-collapsed',
				classExpanded = 'header-expanded',
				textExpanded = 'Expanded',
				textCollapsed = 'Collapsed',
				content = header.next('.collapsible_content');
			header.toggleClass(function(){
				content.toggleClass('expanded');
				if(header.hasClass(classCollapsed)) {
					header
						.addClass(classExpanded)
						.text(textExpanded);
					return classCollapsed;
				} else {
					header
						.addClass(classCollapsed)
						.text(textCollapsed);
					return classExpanded
				}	
			});
		}

		function displayCartModal(e) {
			e.preventDefault();
			modal.show();
			modalContent.html(`You have added ${productDescription.html()} to your cart.`);
		}

		function closeModal(e) {
			modal.hide();
			modalContent.html('');
		}

	})();
});

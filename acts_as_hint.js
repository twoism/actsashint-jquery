(function($){
	$.fn.actsAsHint = function(){
		$(this).each(function(){
			$(this).focus(function(){
				if(this._default != this.value) return;
				this.value = "";
			}).removeClass('hint').blur(function(){
				if(this.value != '') return;
				this.value = this._default;
			}).addClass('hint').val($(this).attr('title')).get(0)._default = $(this).val();
		});
	};
})(jQuery);
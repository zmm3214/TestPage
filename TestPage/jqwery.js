 $(document).ready(function() {

            $('a[href^="#"]').on('click', function(e) {
                e.preventDefault();
                
                var target = this.hash;
                var $target = $(target);
                
                if ($target.length) {
                    $('html, body').stop().animate({
                        'scrollTop': $target.offset().top - 100
                    }, 800, 'swing');
                }
            });
            

            $('.faq-question').on('click', function() {
                var $arrow = $(this).find('.faq-arrow');
                $arrow.toggleClass('rotated');
            });
            
          
            $('.currency-btn').on('click', function() {
                var $tariffCard = $(this).closest('.tariff-card');
                var currency = $(this).data('currency');
                
               
                $tariffCard.find('.currency-btn').removeClass('active');
                $(this).addClass('active');
                
             
                var oldPrice = parseFloat($tariffCard.find('.old-price').data('old-price'));
                var currentPrice = parseFloat($tariffCard.find('.current-price').data('price'));
                
             
                var exchangeRate = 75; 
                
               
                if (currency === 'usd') {
                   
                    var formattedOldPrice = '$' + Math.round(oldPrice / exchangeRate);
                    var formattedCurrentPrice = '$' + Math.round(currentPrice / exchangeRate);
                } else {
                   
                    var formattedOldPrice = oldPrice.toLocaleString('ru-RU') + ' ₽';
                    var formattedCurrentPrice = currentPrice.toLocaleString('ru-RU') + ' ₽';
                }
                
                
                $tariffCard.find('.old-price').text(formattedOldPrice);
                $tariffCard.find('.current-price').text(formattedCurrentPrice);
            });
            
           
            $('.btn-trigger').on('click', function(e) {
                e.stopPropagation(); 
                
                var $dropdown = $(this).closest('.dropdown');
                var $menu = $dropdown.find('.dropdown-menu');
                var $button = $(this);
                
                
                $button.toggleClass('active');
                
                
                $('.dropdown-menu').not($menu).each(function() {
                    var otherMenu = $(this);
                    if (otherMenu.hasClass('show')) {
                        otherMenu.removeClass('show');
                        
                        otherMenu.closest('.dropdown').find('.btn-trigger').removeClass('active');
                    }
                });
                
               
                if ($menu.hasClass('show')) {
                    $menu.removeClass('show');
                } else {
                    $menu.addClass('show');
                }
                

                if ($menu.hasClass('show')) {
                    setTimeout(function() {
                        $(document).one('click', function() {
                            $('.dropdown-menu').each(function() {
                                var menu = $(this);
                                if (menu.hasClass('show')) {
                                    menu.removeClass('show');
                                    menu.closest('.dropdown').find('.btn-trigger').removeClass('active');
                                }
                            });
                        });
                    }, 0);
                }
            });
            
       
            $('.dropdown-menu').on('click', function(e) {
                e.stopPropagation();
            });
            
           
            $(document).on('keydown', function(e) {
                if (e.keyCode === 27) { 
                    $('.dropdown-menu').each(function() {
                        var menu = $(this);
                        if (menu.hasClass('show')) {
                            menu.removeClass('show');
                            menu.closest('.dropdown').find('.btn-trigger').removeClass('active');
                        }
                    });
                }
            });
            

            $(window).on('resize', adjustDropdownPosition);
        });
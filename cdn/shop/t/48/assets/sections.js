/* ==================================================
#Featured collection
#Featured promotions
#Slideshow
#Testimonials
#Gallery
#Video
#Cart
#Product
#Mmenu
#Header
#Social media
#Map
#FAQ
#Read More Toggle

/*============================================================================
  Featured collection
==============================================================================*/

var featuredCollectionSection = {
    init: function() {
        $('.js-product-slider .products-slider').each(function(index, value) {
            var products_per_slide = $(this).data('products-per-slide');
            var products_limit = $(this).data('products-limit');
            var products_available = $(this).data('products-available');
            var cellAlign,
                draggable,
                prevNext,
                wrapAround,
                initialIndex;

            if (products_per_slide == "2" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "4" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "6" && products_available > products_per_slide && products_limit > products_per_slide) {
                cellAlign = "left";
            } else {
                cellAlign = "center";
            }

            if (products_available > products_per_slide && products_limit > products_per_slide) {
                draggable = true;
                prevNext = true;
                wrapAround = true;
            } else {
                draggable = false;
                prevNext = false;
                wrapAround = false;
            }

            if (products_per_slide == "2" && products_available > products_per_slide || products_per_slide == "4" && products_available > products_per_slide || products_per_slide == "6" && products_available > products_per_slide) {
                initialIndex = 0;
            } else if (products_per_slide == "3" && products_available) {
                initialIndex = 1;
            } else if (products_per_slide == "5" && products_available) {
                initialIndex = 2;
            } else if (products_per_slide == "7" && products_available) {
                initialIndex = 3;
            }

            if ($(window).width() <= 798) {
                cellAlign = "center";
                draggable = true;
                prevNext = true;
                wrapAround = true;
                initialIndex = 1;

                $(this).parents('.even-num-slides').removeClass('even-num-slides');
            }

            $(this).flickity({
                "lazyLoad": 2,
                "imagesLoaded": true,
                "draggable": draggable,
                "prevNextButtons": prevNext,
                "wrapAround": wrapAround,
                "cellAlign": cellAlign,
                "pageDots": usePageDots,
                "contain": true,
                "freeScroll": true,
                "arrowShape": arrowSize,
                "initialIndex": initialIndex
            });

            $(this).addClass('slider-initialized');
        });
    },
    unload: function($target) {
        var $slider = $target.find('.js-product-slider');
        if ($slider.hasClass('flickity-enabled')) {
            $slider.flickity('destroy');
        }
    }
}

/*============================================================================
  Featured promotions
==============================================================================*/
var featuredPromotions = {
    init: function() {
        if ($(window).width() > 798 || $(window).width() == 0) {
            $('.feature-overlay').hover(function() {
                $(this).find('.feature-details').slideDown('100', function() {
                    $(this).addClass('reveal-details');
                });
            }, function() {
                $(this).find('.feature-details').removeClass('reveal-details');
                $(this).find('.feature-details').slideUp('100');
            });

            $('.js-featured-promotions').each(function(index, value) {
                var $promos = $(this);
                var animationStyle = $(this).data('promo-animation');

                $promos.waypoint(function() {
                    $(this.element).find(".feature-section").addClass("animated " + animationStyle);
                }, {
                    offset: '80%'
                });
            });
        }
    }
}

/*============================================================================
  Slideshow
==============================================================================*/

var slideshow = {
    init: function() {

        $('.js-homepage-slideshow').each(function(index, value) {
            var $homepageSlider = $(this);
            var settings = {
                slideshowSpeed: $homepageSlider.data('slideshow-speed') * 1000,
                slideshowTextAnimation: $homepageSlider.data('slideshow-text-animation'),
                adaptiveHeight: $homepageSlider.data('adaptive-height')
            }

            //initiate the slideshow
            if (!$homepageSlider.hasClass('flickity-enabled')) {
                var arrowShow = $homepageSlider.find('.gallery-cell').length === 1 ? false : true;
                $homepageSlider.flickity({
                    adaptiveHeight: settings.adaptiveHeight,
                    wrapAround: true,
                    cellAlign: 'left',
                    imagesLoaded: true,
                    prevNextButtons: arrowShow,
                    draggable: arrowShow,
                    pageDots: usePageDots,
                    autoPlay: settings.slideshowSpeed,
                    arrowShape: arrowSize
                });

                if (settings.slideshowTextAnimation != '') {
                    var flkty = $homepageSlider.data('flickity');
                    setTimeout(function() {
                        $homepageSlider.find('.gallery-cell:nth-child(1) .caption-content').addClass('animated ' + settings.slideshowTextAnimation);
                    }, 400);

                    $homepageSlider.on('select.flickity', function() {
                        if ($homepageSlider.is(':visible')) {
                            var currentSlide = flkty.selectedIndex + 1;
                            setTimeout(function() {
                                $homepageSlider.find('.caption-content').removeClass('animated ' + settings.slideshowTextAnimation);
                                $homepageSlider.find('.gallery-cell:nth-child(' + currentSlide + ') .caption-content').addClass('animated ' + settings.slideshowTextAnimation);
                            }, 400);
                        }
                    });
                }
            }

            if ($homepageSlider.find('.gallery-cell').length > 1) {
                $homepageSlider.addClass('multi-image');
            } else {
                $homepageSlider.addClass('single-image');
            }

            $homepageSlider.find('.gallery-cell').each(function() {
                var buttonWidth = 0;
                $(this).find('.action_button').each(function() {
                    $button = $(this);
                    if ($(this).width() > buttonWidth) {
                        buttonWidth = $(this).width();
                    }
                });
                $(this).find('.action_button').width(buttonWidth);
            });

        });
    },
    unload: function($target) {

        var $slider = $target.find('.js-homepage-slideshow');
        $slider.flickity('destroy');

    }
}

/*============================================================================
  Testimonials
==============================================================================*/

var testimonial = {
    init: function() {

        $('.js-testimonial').each(function(index, value) {
            var $testimonialSlider = $(this);
            var settings = {
                slideshowSpeed: $testimonialSlider.data('slideshow-speed') * 1000,
                slideshowTextAnimation: $testimonialSlider.data('slideshow-text-animation')
            }

            if ($('.testimonial-image').length > 0) {
                $('.testimonial-block').each(function() {
                    if ($(this).find('.testimonial-image').length == 0) {
                        var theBlock = $(this).closest('.testimonial-block');
                        $(theBlock).addClass('set-testimonial-height');
                    }
                })
            }

            //initiate the slideshow
            if (!$testimonialSlider.hasClass('flickity-enabled')) {
                var arrowShow = $testimonialSlider.find('.gallery-cell').length === 1 ? false : true;
                $testimonialSlider.flickity({
                    wrapAround: true,
                    cellAlign: 'left',
                    imagesLoaded: true,
                    prevNextButtons: arrowShow,
                    draggable: arrowShow,
                    pageDots: usePageDots,
                    autoPlay: settings.slideshowSpeed,
                    arrowShape: arrowSize
                });

                if (settings.slideshowTextAnimation != '') {
                    var flkty = $testimonialSlider.data('flickity');
                    setTimeout(function() {
                        $testimonialSlider.find('.gallery-cell:nth-child(1) .caption-content').addClass('animated ' + settings.slideshowTextAnimation);
                    }, 400);

                    $testimonialSlider.on('select.flickity', function() {
                        if ($testimonialSlider.is(':visible')) {
                            var currentSlide = flkty.selectedIndex + 1;
                            setTimeout(function() {
                                $testimonialSlider.find('.caption-content').removeClass('animated ' + settings.slideshowTextAnimation);
                                $testimonialSlider.find('.gallery-cell:nth-child(' + currentSlide + ') .caption-content').addClass('animated ' + settings.slideshowTextAnimation);
                            }, 400);
                        }
                    });
                }
            }

            if ($testimonialSlider.find('.gallery-cell').length > 1) {
                $testimonialSlider.addClass('multi-image');
            } else {
                $testimonialSlider.addClass('single-image');
            }

            $testimonialSlider.find('.gallery-cell').each(function() {
                var buttonWidth = 0;
                $(this).find('.action_button').each(function() {
                    $button = $(this);
                    if ($(this).width() > buttonWidth) {
                        buttonWidth = $(this).width();
                    }
                });
                $(this).find('.action_button').width(buttonWidth);
            });

        });
    },
    unload: function($target) {
        var $slider = $target.find('.js-testimonial');

        $slider.flickity('destroy');

    }
}

/*============================================================================
  Gallery
==============================================================================*/

var gallery = {
    init: function() {

        $('.gallery-horizontal').find('.gallery-image-wrapper').each(function() {
            var wrapper = $(this);
            var images = $(this).find("img");
            var imgWidth,
                imgHeight;

            $("<img />").attr("src", $(images).attr("src")).on('load', function() {
                imgWidth = this.width;
                imgHeight = this.height;

                $(wrapper).css("flex-basis", imgWidth * 200 / imgHeight);
                $(wrapper).css("flex-grow", imgWidth * 200 / imgHeight);
                $(wrapper).find("i").css("padding-bottom", imgHeight / imgWidth * 100 + '%');
            });
        });

        if ($('[rel=gallery]').length) {
            $('[rel=gallery]').fancybox({
                baseClass: "gallery-section__lightbox",
                clickContent: "nextOrClose"
            })
        }

    }
}

/*============================================================================
  Video
==============================================================================*/

//check to see if HTML5 video is supported
var supports_video = function() {
    return !!document.createElement('video').canPlayType;
}

var videoSection = {
    init: function() {

        //Loop through all video sections present.
        $('.js-video.lazyframe').each(function(i, videoElement) {
            if ($(videoElement).hasClass('showPosterImage--true')) {
                var videoParentSection = $(videoElement).closest('.video-section').attr('id');
                lazyframe('#' + videoParentSection + ' .lazyframe.showPosterImage--true', {
                    initinview: false
                });
            } else {
                var videoParentSection = $(videoElement).closest('.video-section').attr('id');
                lazyframe('#' + videoParentSection + ' .lazyframe.showPosterImage--false', {
                    initinview: true,
                    onLoad: function(lazyframe) {
                        $(videoElement).find('iframe').slice(1).remove();
                    }
                });
            }
        })

        function hideTextElements(parent) {
            parent.find('.caption').not('.display-mobile-text').hide();
            parent.find('.caption').not('.display-mobile-text').find('.action_button').hide();
        }

        if ($('.js-video').hasClass('hide-text-on-video') && $('.js-video').hasClass('video-autoplay--true')) {
            var videoSection = $('.js-video.hide-text-on-video.video-autoplay--true');
            hideTextElements(videoSection);
        }

        $(".video-section .lazyvideo.hide-text-on-video").on('click', function() {
            var videoSection = $(this).parents('.js-video-section');
            hideTextElements(videoSection);
        })

        $('[data-play-video-button], video.hide-text-on-video').on('click', function() {
            //Target parent lazyframe
            var videoSection = $(this).parents('.js-video-section');
            var lazyElement = videoSection.find('.lazyframe');
            var videoWrapper = videoSection.find('.js-video');
            if (videoWrapper.data('mp4') || videoWrapper.data('ogv')) {
                if (videoSection.find('.js-video.hide-text-on-video').length) {
                    hideTextElements(videoSection);
                }
            } else {
                //create iframe and add settings
                var lazyIframe = document.createElement('iframe');
                iframeSrc = lazyElement.data('src');
                cleanIframeSrc = iframeSrc.substring(0, iframeSrc.indexOf('?')) + '?&autoplay=1';
                lazyIframe.src = cleanIframeSrc;
                lazyIframe.setAttribute('allowfullscreen', true);
                lazyIframe.setAttribute('frameborder', 0);
                //Append iframe to lazyframe
                lazyElement.append(lazyIframe);
                if (videoSection.find('.js-video.hide-text-on-video').length) {
                    hideTextElements(videoSection);
                }
            }
        });
    },
    unload: function($target) {
        $target.find('[data-play-video]').off('click');
        $target.find('video.hide-text-on-video').off('click');
    }
}

/*============================================================================
  Cart
==============================================================================*/
var cart = {
    init: function() {
        if ($('#cart_form .tos_agree').length) {
            //Terms of service on cart page
            $('body').on('click', "#cart_form input[type='submit']", function() {
                if ($(this).parents('form').find('.tos_agree').is(':checked')) {
                    $(this).submit();
                } else {
                    var warning = '<p class="warning animated bounceIn">' + Shopify.translation.agree_to_terms_warning + '</p>';
                    if ($('p.warning').length == 0) {
                        $(this).before(warning);
                    }
                    return false;
                }
            });
        }

        //Refresh page on add to cart if on cart page
        if ($('body').hasClass('cart')) {
            $('.product_form form').on("submit", function() {
                setTimeout(function() {
                    document.location.href = "/cart";
                }, 500);
            });
        }
    }
}

/*============================================================================
  Product
==============================================================================*/

selectCallback = function(variant, selector) {

    var $product = $('.product-' + selector.product.id);
    var $notify_form = $('.notify-form-' + selector.product.id);
    var $productForm = $('.product_form, .shopify-product-form', $product);
    var variantInventory = $productForm.data('variant-inventory');

    var $notifyFormInputs = $('.notify_form__inputs');

    var notifyEmail = Shopify.translation.notify_email;
    var notifyEmailValue = "";
    var notifySend = Shopify.translation.notify_email_send;

    var notifyUrl = $notifyFormInputs.data('url');

    if (variant) {
        var notifyMessage = Shopify.translation.notify_message_first + variant.title + Shopify.translation.notify_message_last + notifyUrl;
    }

    if ($notifyFormInputs.hasClass('customer--true')) {
        var notifyCustomerEmail = "";
        var notifyEmailInput = '<input type="hidden" class="notify_email" name="contact[email]" id="contact[email]" value="' + notifyCustomerEmail + '" />'
    } else {
        var notifyEmailInput = '<input required type="email" class="notify_email" name="contact[email]" id="contact[email]" placeholder="' + notifyEmail + '" value="' + notifyEmailValue + '" />';
    }
    var notifyFormHTML = notifyEmailInput + '<input type="hidden" name="challenge" value="false" /><input type="hidden" name="contact[body]" class="notify_form_message" data-body="' + notifyMessage + '" value="' + notifyMessage + '" /><input class="action_button" type="submit" value="' + notifySend + '" style="margin-bottom:0px" />';

    //Image Variant feature
    if (variant && variant.featured_image && $product.is(":visible")) {
        var $sliders = $('.js-product-gallery, .js-gallery-modal', $product);
        $sliders.each(function() {
            var $slider = $(this);
            var $sliderInstance = Flickity.data(this);
            if ($slider.is(":visible") && $sliderInstance != undefined) {
                var index = $('[data-image-id="' + variant.featured_image.id + '"]').data('index');
                $sliderInstance.select(index, false, true);
            }
        });
    }

    if (variant) {
        if (variantInventory) {
            variantInventory.forEach(function(v) {
                if (v.id === variant.id) {
                    variant.inventory_quantity = v.inventory_quantity;
                    variant.inventory_management = v.inventory_management;
                    variant.inventory_policy = v.inventory_policy;
                }
            });
        }

        $('.sku span', $product).text(variant.sku);

        if (Shopify.theme_settings.product_form_style == 'swatches') {
            for (var i = 0, length = variant.options.length; i < length; i++) {
                var radioButton = $productForm.find('.swatch[data-option-index="' + escape(i) + '"] :radio[value="' + variant.options[i].replace(/\"/g, '\\"') + '"]');
                if (radioButton.length) {
                    radioButton.get(0).checked = true;
                }
            }
        } else {
            $(".notify_form_message", $product).attr("value", $(".notify_form_message", $product).data('body') + " - " + variant.title);
        }
    }

    if (variant && variant.available == true) {
        if (variant.price < variant.compare_at_price) {
            $('.was_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.compare_at_price, $('body').data('money-format')) + '</span>');
            $('.savings', $product).html(Shopify.translation.savings_text + ' ' + parseInt(((variant.compare_at_price - variant.price) * 100) / variant.compare_at_price) + '% (' + '<span class="money">' + Shopify.formatMoney(variant.compare_at_price - variant.price, $('body').data('money-format')) + '</span>)');
            $('.current_price', $product).parent().addClass('sale');
        } else {
            $('.was_price', $product).html('');
            $('.savings', $product).html('');
            $('.current_price', $product).parent().removeClass('sale');
        }

        if (variant.inventory_management && variant.inventory_quantity > 0) {
            if (Shopify.theme_settings.display_inventory_left) {
                if (variant.inventory_quantity == 1) {
                    items_left_text = Shopify.translation.one_item_left;
                } else {
                    items_left_text = Shopify.translation.items_left_text;
                }

                var inventoryThreshold = parseInt(Shopify.theme_settings.inventory_threshold);
                if (variant.inventory_quantity <= inventoryThreshold) {
                    $('.items_left', $product).html(variant.inventory_quantity + " " + items_left_text);
                } else {
                    $('.items_left', $product).html("");
                }
            }
            if (Shopify.theme_settings.limit_quantity) {
                if (variant.inventory_policy == "deny") {
                    $('.quantity', $product).attr('max', variant.inventory_quantity);
                }
            }
        } else {
            $('.items_left', $product).text('');
            $('.quantity', $product).removeAttr('max');
        }

        $('.sold_out', $product).text('');
        if (variant.price > 0) {
            $('.current_price', $product).removeClass('sold_out').html('<span class="money">' + Shopify.formatMoney(variant.price, $('body').data('money-format')) + '</span>');
        } else {
            $('.current_price', $product).removeClass('sold_out').html(Shopify.theme_settings.free_text);
        }
        $('.add_to_cart', $product).removeClass('disabled').removeAttr('disabled').find('span').text($('.add_to_cart', $product).data('label'));
        $('.shopify-payment-button', $product).removeClass('disabled');
        $('.purchase-details__buttons', $product).removeClass('product-is-unavailable');
        $('.modal_price', $product).removeClass('variant-unavailable');
        $notify_form.hide();
        $notifyFormInputs.empty();
    } else {
        // When product is sold out
        var message = variant ? Shopify.theme_settings.sold_out_text : Shopify.translation.unavailable_text;

        if (variant) {
            // Adds correct price
            if (variant.price > 0) {
                $('.current_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.price, $('body').data('money-format')) + '</span>');
            } else {
                $('.current_price', $product).html(Shopify.theme_settings.free_text);
            }
            if (Shopify.theme_settings.display_sold_out_price) {
                $('.current_price', $product).parents('.price__container--display-price-true').addClass('has-margin-right');
            }
            $('.modal_price', $product).removeClass('variant-unavailable');
        } else {
            // Add class to quickshop so we know variant is unavailable
            $('.modal_price', $product).addClass('variant-unavailable');
            $('.current_price', $product).html('');
            $('.was_price', $product).html('');
            $('.savings', $product).html('');
            $('.current_price', $product).parents('.price__container--display-price-true').removeClass('has-margin-right');
        }

        // If show price setting disabled, hide price, compare at price and savings
        if (!Shopify.theme_settings.display_sold_out_price) {
            $('.current_price', $product).html('');
            $('.was_price', $product).html('');
            $('.savings', $product).html('');
        }

        $('.items_left', $product).text('');
        $('.quantity', $product).removeAttr('max');
        $('.sold_out', $product).text(message);
        $('.purchase-details__buttons', $product).addClass('product-is-unavailable');
        $('.add_to_cart', $product).addClass('disabled').attr('disabled', 'disabled').find('span').text(message);
        $('.shopify-payment-button').addClass('disabled');
        $notify_form.hide();
        $notifyFormInputs.empty();

        if (variant && !variant.available) {
            $notify_form.fadeIn();
            $notifyFormInputs.empty();
            $notifyFormInputs.append(notifyFormHTML);
        }

    }

    if (Shopify.theme_settings.show_multiple_currencies) {
        convertCurrencies();
    }
};

var productPage = {
    init: function() {

        var draggable = true;
        var prevNextButtons = true;
        var autoplay = $('.js-product-gallery').data('autoplay');

        setTimeout(function() {
            imageFunctions.linkGalleryAndCarousel($('.js-product-page-gallery .js-product-gallery'), $('.js-product-page-gallery .product_gallery_nav'));
        }, 1000);

        if ($('.js-full-width-product-images').length) {
            imageFunctions.fullWidth('.product-template .product .description img', '.js-full-width-product-images');
        }

        if ($('.js-product-gallery').hasClass('single-image')) {
            draggable = false;
            prevNextButtons = false;
        }

        // Wrap product description if there is an iframe embedded
        $('.product_section .description').find('iframe').wrap('<div class="lazyframe" data-ratio="16:9"></div>');

        if (is_touch_device() && $('.js-product-gallery').hasClass('popup-enabled--false')) {
            imageFunctions.zoom('.js-product-gallery');
            draggable = false;
        } else {
            imageFunctions.zoom('.js-product-gallery', false);
        }

        $('.js-product-gallery').flickity({
            "adaptiveHeight": true,
            "wrapAround": "true",
            "cellAlign": "left",
            "draggable": draggable,
            "contain": true,
            "imagesLoaded": true,
            "lazyLoad": 2,
            "pageDots": false,
            "prevNextButtons": prevNextButtons,
            "autoPlay": autoplay ? 6000 : false,
            "dragThreshold": 10,
            "arrowShape": arrowSize
        });

        var groupCells = true;
        var navPrevNextButtons = false;
        var navCellAlign = "center";
        var navWrapAround = false;

        if ($('.product_gallery_nav .gallery-cell').length >= 7) {
            groupCells = false;
            navPrevNextButtons = true;
            navCellAlign = "left";
            navWrapAround = true;
        }

        $('.product-template .product_gallery_nav.product_gallery_nav--bottom-slider').flickity({
            "asNavFor": ".product_gallery",
            "adaptiveHeight": false,
            "wrapAround": navWrapAround,
            "cellAlign": "center",
            "draggable": true,
            "groupCells": groupCells,
            "prevNextButtons": navPrevNextButtons,
            "pageDots": false,
            "lazyLoad": 2,
            "dragThreshold": 10,
            "arrowShape": arrowSize
        });

        if (window.location.search === '?contact_posted=true') {
            $('.notify_form .contact-form').hide();
            $('.notify_form .contact-form').prev('.message').html(Shopify.translation.notify_success_text);
        }

        var $notify_form = $('.notify_form .contact-form');
        $notify_form.each(function() {
            var $nf = $(this);
            $nf.on("submit", function(e) {
                if ($('input[name="challenge"]', $nf).val() !== "true") {
                    $.ajax({
                        type: $nf.attr('method'),
                        url: $nf.attr('action'),
                        data: $nf.serialize(),
                        success: function(data) {
                            $nf.fadeOut("slow", function() {
                                $nf.prev('.message').html(Shopify.translation.notify_success_text);
                            });
                        },
                        error: function(data) {
                            $('input[name="challenge"]', $nf).val('true');
                            $nf.submit();
                        }
                    });
                    e.preventDefault();
                }
            });
        });

        if (Shopify.theme_settings.product_form_style == 'swatches') {
            $('body').on('change', '.swatch :radio', function() {
                var optionIndex = $(this).closest('.swatch').attr('data-option-index');
                var optionValue = $(this).val();
                var parentForm = $(this).closest('.product_form form');


                if (parentForm.siblings('.notify_form').length) {
                    var notifyForm = parentForm.siblings('.notify_form');
                } else {
                    var notifyForm = $('.js-notify-form');
                }

                var option1 = parentForm.find('.swatch_options input:checked').eq(0).val();
                var option2 = parentForm.find('.swatch_options input:checked').eq(1).val() || '';
                var option3 = parentForm.find('.swatch_options input:checked').eq(2).val() || '';

                if (option1 && option2 && option3) {
                    var notifyMessage = option1 + ' / ' + option2 + ' / ' + option3;
                } else if (option1 && option2) {
                    var notifyMessage = option1 + ' / ' + option2;
                } else {
                    var notifyMessage = option1;
                }


                notifyForm.find(".notify_form_message").attr("value", notifyForm.find(".notify_form_message").data('body') + " - " + notifyMessage);

                $(this)
                    .closest('form')
                    .find('.single-option-selector')
                    .eq(optionIndex)
                    .val(optionValue)
                    .trigger('change');
            });
        }

        $('.js-product-gallery a').fancybox({
            baseClass: "product-section__lightbox",
            clickContent: false,
            afterShow: function(instance, slide) {
                const zoom = instance.$trigger.first().parents('.js-product-gallery').data('zoom');
                if (zoom) {
                    $('.fancybox-image')
                        .wrap('<span class="zoom-wrap" style="display:inline-block"></span>')
                        .css('display', 'block')
                        .parent()
                        .zoom({
                            touch: false,
                            magnify: 1
                        });
                }
            },
            afterClose: function(instance, slide) {
                const $instanceGallery = instance.$trigger.first().parents('.js-product-gallery');
                $instanceGallery.hide();
                setTimeout(function() {
                    $instanceGallery.fadeIn(100);
                }, 1);
            }
        })

        $('.js-product_section .product_form_options').each(function() {
            new Shopify.OptionSelectors($(this).data("select-id"), {
                product: $(this).data("product"),
                onVariantSelected: selectCallback,
                enableHistoryState: $(this).data("enable-state")
            });
        });

        /*
        If the product recommendations section exists, run the loadProductRecommendations method
        The selectCallback within this method will only affect the products in the product recommendations section
        */
        if ($('.product-recommendations-container').length) {
            productPage.loadProductRecommendations();
        }
    },
    loadProductRecommendations: function() {
        var $metaProductRecommendationsSection = $('.meta-related-recommended-collection');
        var $dynamicProductRecommendationSection = $('.product-recommendations');
        var productId = $dynamicProductRecommendationSection.data('productId');
        var limit = $dynamicProductRecommendationSection.data('limit');
        var dynamicSectionEnabled = $dynamicProductRecommendationSection.data('enabled');
        var metaSectionEnabled = $metaProductRecommendationsSection.data('enabled');
        var $productRecommendationsContainer = $('[data-product-recommendations-container]');
        var $recommendedProductSlider = $('.js-recommended-products-slider');

        if ($metaProductRecommendationsSection.length) {
            // If recommended products are displaying a collection using a meta-related-collection-tag

            // If the section is not enabled, empty the product recommendations container
            if (!metaSectionEnabled) {
                $productRecommendationsContainer.empty();
                return;
            }

            // Populate the product recommendations container with the meta-related-collection
            $productRecommendationsContainer.html($metaProductRecommendationsSection.html());

            // Initialize product slider if it exists on page
            if ($recommendedProductSlider.length) {
                this.recommendedProductsSlider();
            }

            // If select dropdown doesn't already exist, re-link swatches on inline quickshop
            $('[data-product-recommendations-container] .js-product_section .product_form_options').each(function() {
                if ($(this).find('select').length === 0) {
                    new Shopify.OptionSelectors($(this).data("select-id"), {
                        product: $(this).data("product"),
                        onVariantSelected: selectCallback,
                        enableHistoryState: $(this).data("enable-state")
                    });
                }
            });

            // Initialize shopify payment buttons
            if (Shopify.PaymentButton) {
                Shopify.PaymentButton.init();
            }

            // Hide product recommendations section
            $('.recommended-products-section').empty();

        } else if ($dynamicProductRecommendationSection.length) {
            // If recommended products are displaying a collection using a dynamic collection produced by Shopify

            // If the section is not enabled, empty the product recommendations container
            if (!dynamicSectionEnabled) {
                $productRecommendationsContainer.empty();
                return;
            }
            // Make ajax call to request information for Shopify's recommended products
            $.ajax({
                type: 'GET',
                url: "/recommendations/products?section_id=product-recommendations&limit=" + limit + "&product_id=" + productId,
                success: function(data) {

                    var $recommendedProductsElement = $(data).find('.product-recommendations').html();

                    // Empty product recommendations container
                    $productRecommendationsContainer.empty();

                    // Insert product list into the product recommendations container
                    $productRecommendationsContainer.html($recommendedProductsElement);

                    // Initialize product slider if it exists on page
                    if ($recommendedProductSlider.length) {
                        productPage.recommendedProductsSlider();
                    }

                    // Re-link swatches on inline quick-shop
                    $('[data-product-recommendations-container] .js-product_section .product_form_options').each(function() {
                        new Shopify.OptionSelectors($(this).data("select-id"), {
                            product: $(this).data("product"),
                            onVariantSelected: selectCallback,
                            enableHistoryState: $(this).data("enable-state")
                        });
                    });

                    // Initialize shopify payment buttons
                    if (Shopify.PaymentButton) {
                        Shopify.PaymentButton.init();
                    }

                    // Hide entire recommendations if there are not recommended products
                    if ($('[data-recommended-product-count]').data() === 0) {
                        $('[data-product-recommendations-container]').hide();
                    }

                }
            });

        } else {
            // If there are no product recommendations on the page, hide the container
            $productRecommendationsContainer.hide();
        };
    },
    productSwatches: function() {
        //Swatches linked with selected options
        if (Shopify.theme_settings.product_form_style == 'swatches') {
            if ($('.js-product_section').length) {
                var $productForms = $('.js-product_section').find('.product_form');
                $productForms.addClass('is-visible');

                //Loop through each product and set the initial option value state

                $productForms.each(function() {
                    var JSONData = $(this).data('product');
                    var productID = $(this).data('product-id');
                    var productSection = '.product-' + productID + ' .js-product_section';
                    var swatchOptions = $(this).find('.swatch_options .swatch');
                    if (swatchOptions.length > 1) {
                        Shopify.linkOptionSelectors(JSONData, productSection);
                    }
                });
            }

            //Add click event when there is more than one product on the page (eg. Collection in Detail)
            if ($('.js-product_section').length > 1) {
                $('body').on('click', '.swatch-element', function() {
                    var swatchValue = $(this).data('value').toString();

                    $(this)
                        .siblings('input[value="' + swatchValue.replace(/\"/g, '\\"') + '"]')
                        .prop("checked", true)
                        .trigger("change");

                    var JSONData = $(this).parents('.product_form').data('product');
                    var productID = $(this).parents('.product_form').data('product-id');
                    var productSection = '.product-' + productID + ' .js-product_section';
                    var swatchOptions = $(this).parents('.product_form').find('.swatch_options .swatch');

                    if (swatchOptions.length > 1) {
                        Shopify.linkOptionSelectors(JSONData, productSection);
                    }
                })
            }
        }
    },
    recommendedProductsSlider: function() {

        $('.js-recommended-products-slider .products-slider').each(function(index, value) {
            var products_per_slide = $(this).data('products-per-slide');
            var products_limit = $(this).data('products-limit');
            var products_available = $(this).data('products-available');
            var cellAlign,
                draggable,
                prevNext,
                wrapAround,
                initialIndex;

            if (products_per_slide == "2" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "4" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "6" && products_available > products_per_slide && products_limit > products_per_slide) {
                cellAlign = "left";
            } else {
                cellAlign = "center";
            }

            if (products_available > products_per_slide && products_limit > products_per_slide) {
                draggable = true;
                prevNext = true;
                wrapAround = true;
            } else {
                draggable = false;
                prevNext = false;
                wrapAround = false;
            }

            if (products_per_slide == "2" && products_available > products_per_slide || products_per_slide == "4" && products_available > products_per_slide || products_per_slide == "6" && products_available > products_per_slide) {
                initialIndex = 0;
            } else if (products_per_slide == "3" && products_available) {
                initialIndex = 1;
            } else if (products_per_slide == "5" && products_available) {
                initialIndex = 2;
            } else if (products_per_slide == "7" && products_available) {
                initialIndex = 3;
            }

            if ($(window).width() <= 798) {
                cellAlign = "center";
                draggable = true;
                prevNext = true;
                wrapAround = true;
                initialIndex = 1;

                $(this).parents('.even-num-slides').removeClass('even-num-slides');
            }

            $(this).flickity({
                "lazyLoad": 2,
                "imagesLoaded": true,
                "draggable": draggable,
                "cellAlign": cellAlign,
                "prevNextButtons": prevNext,
                "wrapAround": wrapAround,
                "pageDots": usePageDots,
                "contain": true,
                "freeScroll": true,
                "arrowShape": arrowSize,
                "initialIndex": initialIndex
            });
        });
    },
    initializeQuantityBox: function() {

        $('body').on('click', '.js-change-quantity', function() {
            var $this = $(this),
                $input = $(this).siblings('input'),
                val = parseInt($input.val()),
                valMax = 100000000000000000000000000000,
                valMin = $input.attr('min') || 0;

            if ($input.attr('max') != null) {
                valMax = $input.attr('max');
            }

            if (isNaN(val) || val < valMin) {
                $input.val(valMin);
                return false;
            } else if (val > valMax) {
                $input.val(valMax);
                return false;
            }

            if ($this.data('func') == 'plus') {
                if (val < valMax) $input.val(val + 1);
            } else {
                if (val > valMin) $input.val(val - 1);
                if ($this.parents(".cart_item").length) {
                    if (val - 1 == 0) {
                        $this.closest('.cart_item').addClass('animated fadeOutUp')
                    }
                }
            }
            $input.trigger('change');

        });
    },
    unload: function($target) {

        var $slider = $target.find('.products-slider');
        $slider.flickity('destroy');
        $('body').off('click', '.js-change-quantity');
    }
}


/*============================================================================
  Mmenu
==============================================================================*/
var mMenu = {
    init: function() {
        $("#mmm-menu").mmenu({
            navbar: {
                title: function() {
                    return this.dataset.title || "";
                }
            },
            "extensions": [
                "multiline"
            ],
            "navbars": [{
                    "position": "top",
                    "type": "tabs",
                    "content": [
                        "<a href='#panel-products'>商品</a>",
                        "<a href='#panel-services'>服務區</a>"
                    ]
                },
                {
                    "position": "bottom",
                    "content": [
                        "<a class='icon-phone' href='tel:+886287925186/'>客服</a>",
                        "<a class='icon-user' href='/account'>會員</a>",
                        "<a class='fa fa-map-marker' href='/pages/門市位置'>門市</a>"
                    ]
                }
            ],
            hooks: {
                "initNavbar:before": function($panel) {
                    var parent = $panel.data("parent");
                    if (parent) {
                        $panel.data("mm-parent", $(parent));
                    }
                }
            }
        }, {
            offCanvas: {
                pageSelector: "#mm-page_wrap"
            }
        });
    }
}

/*============================================================================
  Header
==============================================================================*/

var header = {
    init: function() {

        var closeDropdown = function() {
            $('body').removeClass('is-active');
            $('.dropdown_link').removeClass('active_link');
            $('.dropdown_container').hide();
            $('.mobile_nav').find('div').removeClass('open');
        };

        var closeMiniCart = function() {
            $('body').removeClass('is-active').removeClass('blocked-scroll');
            $('.dropdown_link').toggleClass('active_link');
            $('.cart_container').removeClass('active_link');
        };

        var openMiniCart = function($cart_container) {
            $('body').addClass('blocked-scroll');
            $('.mobile_nav div').removeClass('open');
            $('.dropdown_link').removeClass('active_link');
            $cart_container.addClass('active_link');
        };

        //Vertical menu enabled
        if ($('.dropdown_link--vertical').length) {
            $('.dropdown_link--vertical, .vertical-menu_submenu').on('mouseover', function(e) {
                var $dropdown = $(this).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]');
                var clickCount = $(this).attr('data-click-count');

                $('.active_link').removeClass('active_link');
                if (!$(this).hasClass('active_link')) {
                    $(this).children('a').addClass('active_link');
                    $('.is-absolute').parent().removeClass('feature_image');
                }
            });

            //Enable touch on parent link if on touch device and desktop menu is visible
            if (is_touch_device()) {
                $('.vertical-menu .sublink a, .vertical-menu_submenu .sublink a').on('touchstart click', function(e) {
                    e.stopPropagation();

                    var verticalMenu = $(this);

                    if (e.type == "touchstart") {
                        clicked = true;
                        if ($(this).attr('data-click-count') < 1) {
                            openDropdown(verticalMenu);
                            e.preventDefault();
                        }
                    } else if (e.type == "click" && !clicked) {
                        if ($(this).attr('data-click-count') < 1) {
                            openDropdown(verticalMenu);
                            e.preventDefault();
                        }
                    } else {
                        clicked = false;
                    }

                    function openDropdown(verticalMenu) {

                        var $dropdownMegaMenu = $(verticalMenu).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]');
                        var $dropdownVertical = $(verticalMenu).next('.vertical-menu_submenu');
                        var clickCount = $(verticalMenu).attr('data-click-count');

                        $('.dropdown_link--vertical').not(verticalMenu).attr('data-click-count', 0);
                        $('.dropdown_link--vertical').attr('data-no-instant', true);
                        $('.dropdown_container').hide();

                        $dropdownMegaMenu.show();
                        $('.vertical-menu_submenu').removeClass('is-visible');
                        $dropdownVertical.addClass('is-visible');

                        //capture touch event
                        if (e.type == 'touchstart') {
                            clickCount++;
                            $(verticalMenu).attr('data-click-count', clickCount);

                            if (clickCount < 2) {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                            }
                        }
                    }
                });
            }
        }

        if ($('.promo_banner').length) {
            var promo_banner = Cookies.get('promo_banner');

            if (promo_banner != 'dismiss') {
                $('body').addClass('promo_banner-show');
                $('.promo_banner').on('click', '.promo_banner-close', function() {
                    $('body').removeClass('promo_banner-show');
                    Cookies.set('promo_banner', 'dismiss', {
                        expires: 30
                    });
                });
            }
        }

        //offscreen check for menu
        $('.vertical-menu_submenu, .vertical-menu_sub-submenu').each(function() {
            if ($(this).is(':off-right')) {
                $(this).addClass('vertical-menu--align-right');
            }
        });

        //Click anywhere outside of dropdown to close
        $('html').on('click', function(event) {
            if (!$(event.target).closest('.cart_container').length && $('.cart_content').is(':visible')) {

                closeMiniCart();
            }

            if (!$(event.target).closest('.dropdown_container').length && $('.dropdown').is(':visible')) {

                closeDropdown();
            }

        });

        //Only apply on larger screen sizes
        if ($(window).width() > 798) {
            if ($('.header').hasClass('header-fixed--true')) {

                //offset scroll position
                $('body').on('click', '.banner a[href^="#"]', function(e) {
                    e.preventDefault();
                    var anchorLink = $(this).attr('href');
                    var headerHeight = $('.main_nav_wrapper.sticky_nav').outerHeight();
                    $('html, body').animate({
                        scrollTop: $(anchorLink).offset().top - headerHeight
                    }, 2000);
                });

                if (!$('.main_nav_wrapper').hasClass('sticky_nav')) {
                    var sticky_nav = new Headhesive('.main_nav_wrapper', {
                        offset: 700,
                        throttle: 300,
                        classes: {
                            clone: 'sticky_nav',
                            stick: 'sticky_nav--stick',
                            unstick: 'sticky_nav--unstick'
                        },
                        onInit: function() {
                            $(".sticky_nav .secondary_logo").css('display', 'none');
                            $(".sticky_nav .primary_logo").css('display', 'block');
                            $(".sticky_nav .icon-search").css('display', 'block');
                            $(".sticky_nav .search_container").css('display', 'none');
                            $(".sticky_nav .nav:last").prepend($(".header .cart_container").clone());
                            if (Shopify.theme_settings.menu_position == 'inline') {
                                var sticky_nav_height = $(".sticky_nav").height() + 5;
                            } else {
                                var sticky_nav_height = $(".sticky_nav .nav").height() + 5;
                            }
                        },
                        onStick: function() {
                            $(".sticky_nav .mini_cart").css("height", $(".sticky_nav .main_nav").height() + 5);
                            $(".sticky_nav .cart_content").css("top", $(".sticky_nav .main_nav").height());
                        },
                        onUnstick: function() {
                            $('.cart_container').removeClass('active_link');
                        }
                    });
                }
            } else {
                $('.header-fixed--true').removeClass('header-fixed--true');
                if ($('.main_nav_wrapper').length > 1) {
                    $('.main_nav_wrapper').first().remove();
                }
            }

            if ($('img.primary_logo:visible')) {
                $('.logo img', $(".feature_image .header")).attr('src', $('.logo img').data('src-home'));
            } else {
                $('.logo img').attr('src', $('.logo img').data('src'));
            }
            //Mobile menu
        } else {
            if ($('#header').hasClass('mobile_nav-fixed--true')) {
                $('body').addClass('mobile_nav-fixed--true');

                //offset scroll position
                $('body').on('click', '.banner a[href^="#"]', function(e) {
                    e.preventDefault();
                    var anchorLink = $(this).attr('href');
                    var headerHeight = $('#header').outerHeight();
                    $('html, body').animate({
                        scrollTop: $(anchorLink).offset().top - headerHeight
                    }, 2000);
                });
            } else {
                $('body').addClass('mobile_nav-fixed--false');
            }
        }

        //avoid cart_content duplicating for mobile screen sizes
        if ($('#header .cart_content').length < 1) {
            $('#header .cart_container').append($('.header .cart_content').clone());
        }

        if (is_touch_device() && $(window).width() <= 798 || $(window).width() <= 798) {

            $('.dropdown_link').attr('data-no-instant', true);

            $('body').on('click', '.dropdown_link', function(e) {
                $('.nav a').removeClass('active_link');

                if ($('#header').is(':visible')) {
                    var $dropdown = $(this).parents("#header").find('[data-dropdown="' + $(this).data("dropdown-rel") + '"]')

                    if (!$(this).hasClass('mini_cart')) {
                        $('.cart_container').removeClass('active_link');
                    }

                } else {

                    if ($(this).hasClass("icon-search")) {
                        window.location = $(this).attr("href");
                        return false;
                    }

                    var $dropdown = $(this).parents(".main_nav").find('[data-dropdown="' + $(this).data("dropdown-rel") + '"]')
                }

                if ($dropdown.is(':visible') || $dropdown.attr('class') === undefined) {
                    $dropdown.hide();
                    $('body').removeClass('is-active');
                } else {
                    $('.dropdown_container').hide();
                    if (!$(this).hasClass('cart_container')) {
                        $('.is-absolute').parent().removeClass('feature_image');
                    }
                    $dropdown.show();
                    $('body').addClass('is-active');
                    $('.mobile_nav').find('div').removeClass('open');
                }

                if ($dropdown.is(':visible')) {
                    e.stopPropagation();
                    return false;
                }
            });

            $('body').on("click", '.mobile_nav', function() {
                $(this).find('div').toggleClass('open');
            });

            //Toggle mini-cart with menu icon
            if (Shopify.theme_settings.cart_action != 'redirect_cart') {
                $(".mini_cart").on("click", function(e) {
                    var $cart_container = $(this).parent();
                    if ($cart_container.hasClass('active_link')) {
                        closeMiniCart();
                        $('body').removeClass('blocked-scroll');
                    } else {
                        openMiniCart($cart_container);
                        $('body').addClass('blocked-scroll');
                    }

                    if (touch_device) {
                        e.preventDefault();
                    }
                });
            }


            $('.cart_content__continue-shopping').on('click', function(e) {
                closeMiniCart();
            })

        } else {

            $(".nav a, .logo a").not(".cart_content a").on("mouseenter", function() {
                if (!$(this).hasClass("active_link") && $('.dropdown_link--vertical').length == 0) {
                    $('.dropdown_container').hide();
                    $('.active_link').removeClass('active_link');
                    $('.is-absolute').parent().addClass('feature_image');
                }
            });

            $('.main_nav, .top_bar, .cart_container').on("mouseleave", function() {
                if ($(window).width() > 798) {
                    $('.dropdown_container').hide();
                }
                $('.active_link').removeClass('active_link');
                $('.is-absolute').parent().addClass('feature_image');
            });

            $('.dropdown_link, .dropdown_link--vertical').attr('data-click-count', 0);

            $('.dropdown_link').on('mouseover touchstart', function(e) {
                if ($(window).width() > 798) {
                    $('.dropdown_container').hide();
                }

                var $dropdown = $(this).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]');
                var clickCount = $(this).attr('data-click-count');

                $('.active_link').removeClass('active_link');

                if (!$(this).hasClass('active_link')) {
                    $dropdown.show();

                    if ($(this).hasClass('mini_cart')) {
                        $(this).parent('.cart_container').addClass('active_link');
                    } else {
                        if ($(window).width() > 798) {
                            $(this).addClass('active_link');
                        }
                        $('.is-absolute').parent().removeClass('feature_image');
                    }
                }

                //Enable touch on parent link if on touch device and desktop menu is visible
                if (is_touch_device()) {
                    $('.dropdown_link').not(this).attr('data-click-count', 0);
                    $('.dropdown_link').attr('data-no-instant', true);


                    //capture touch event
                    if (e.type == 'touchstart') {
                        clickCount++;
                        $(this).attr('data-click-count', clickCount);

                        if (clickCount < 2) {
                            e.preventDefault();
                            e.stopPropagation();
                            return false;
                        }
                    }
                }

            });

        }

    },
    removeDataAttributes: function(target) {
        if ($(target).length) {
            var i,
                $target = $(target),
                attrName,
                dataAttrsToDelete = [],
                dataAttrs = $target.get(0).attributes,
                dataAttrsLen = dataAttrs.length;

            for (i = 0; i < dataAttrsLen; i++) {
                if ('data-' === dataAttrs[i].name.substring(0, 5)) {
                    dataAttrsToDelete.push(dataAttrs[i].name);
                }
            }
            $.each(dataAttrsToDelete, function(index, attrName) {
                $target.removeAttr(attrName);
            })
        }
    },
    loadMegaMenu: function() {

        //Remove old mega-menus so that theme-editor works properly
        $('.sticky_nav .mega-menu').remove();
        $('.header .mega-menu').remove();

        //Clone the mega menu from section into sticky_nav
        $('.mega-menu-container .mega-menu')
            .clone()
            .appendTo('.sticky_nav .main_nav');
        //Remove theme-editor data-attributes
        header.removeDataAttributes('.sticky_nav .mega-menu.dropdown_container .dropdown_column');

        //Loop through mega-menus to add arrow to parent
        $('.mega-menu-container .mega-menu').each(function(index) {
            var megaMenuValue = $(this).data("dropdown");
            $('[data-dropdown-rel="' + megaMenuValue + '"]')
                .find('span')
                .remove();

            $('[data-dropdown-rel="' + megaMenuValue + '"]')
                .not('.icon-search')
                .append(' <span class="icon-down-arrow"></span>')
                .addClass('mega-menu-parent')
                .addClass('dropdown_link')
                .removeClass('top_link');

            $('[data-dropdown="' + megaMenuValue + '"]').each(function(index) {
                if (!$(this).hasClass('mega-menu')) {
                    $(this).remove();
                }
            });

            $(this).clone().appendTo('.header .main_nav');
        });

        //Remove default mega menus if vertical menus are selected
        if ($('.dropdown_link--vertical').length) {
            $('.dropdown_link--vertical.mega-menu-parent + .vertical-menu_submenu').remove();
            $('.dropdown_link--vertical:not(.mega-menu-parent)').each(function(index) {
                var megaMenuValue = $(this).data('dropdown-rel');
                $('[data-dropdown="' + megaMenuValue + '"]').remove();
            })
        }

        $('.mega-menu-parent').on('mouseenter', function() {

            if (!$(this).hasClass('active_link')) {
                $('.dropdown_container').hide();
                $(this).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]').toggle();

                $(this).addClass('active_link');
                $('.is-absolute').parent().removeClass('feature_image');

            }
        });

        //Remove theme-editor data-attributes
        header.removeDataAttributes('.header .mega-menu.dropdown_container .dropdown_column');

        if (is_touch_device() || $(window).width() <= 798) {
            $('.dropdown_link').attr('data-no-instant', true);
        }

        header.loadMobileMegaMenu();
    },
    loadMobileMegaMenu: function() {

        //Loop through mega menus and add to mobile menu
        $('.mega-menu-container .mobile-mega-menu').each(function(index) {
            $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"]').find('span').remove();
            $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"] > a').append(' <span class="right icon-down-arrow"></span>').attr('data-no-instant', 'true');
            $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"]').addClass('mobile-mega-menu-parent sublink');
            $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"]').append(this);
            $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"] > ul').each(function(index) {
                if (!$(this).hasClass('mobile-mega-menu')) {
                    $(this).remove();
                }
            });
        });
    },
    unloadMegaMenu: function() {
        $('.header .mega-menu').remove();
        $('.mega-menu-container .mega-menu').each(function(index) {
            var menuParent = $(this).data('dropdown');
            $('.mega-menu-parent[data-dropdown-rel="' + $(this).data("dropdown") + '"]').find('.icon-down-arrow').remove();
        });
    },
    unload: function() {
        $('body').off('click', '.mobile_nav');
        $('body').off('click', '.dropdown_link');
        $('html').off('click');
        $('.mini_cart').off('click');
        $('.cart_content__continue-shopping').off('click');
        $('body').off('click', '.banner a[href^="#"]');
        $('.main_nav_wrapper.sticky_nav').remove();
    }
}

/*============================================================================
  Social media
==============================================================================*/

var social = {
    twitter: function() {
        if ($('.twitter-timeline').length) {
            if (!window.twttr) {
                //Initialize twitter feed
                window.twttr = (function(d, s, id) {
                    var t, js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "https://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);
                    return window.twttr || (t = {
                        _e: [],
                        ready: function(f) {
                            t._e.push(f)
                        }
                    });
                }(document, "script", "twitter-wjs"));
            } else {
                window.twttr.ready(function(twttr) {
                    twttr.widgets.load(
                        document.getElementById("twitter-timeline")
                    );
                });
            }
        }
    },
    unload: function() {}
}

var instagram = {
    loadContent: function(s) {
        if (s.clientID) {
            var url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + s.clientID;

            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'jsonp',
                success: function(data) {

                    if (data.meta.code === 200 && data.data.length) {
                        var data = data.data;
                        var count = 0;
                        s.el.empty();

                        for (var i = 0; i < data.length; i++) {
                            var thisMedia = data[i],
                                item;

                            var url = thisMedia.images.low_resolution.url;

                            if (!thisMedia.images.low_resolution.url.indexOf("null") > -1) {
                                item = '<div class="il-photo__img instagram__bg" style="background-image:url(' + url + ')" data-filter="' + thisMedia.filter + '" /></div>';
                                item = '<a href="' + thisMedia.link + '" target="_blank" class="instagram__link">' + item + '</a>';
                            }

                            if (thisMedia.videos) {
                                item = '<div class="instagram__video instagram__bg" style="background-image:url(' + url + ')" data-filter="' + thisMedia.filter + '" /></div>';
                                item = '<a href="' + thisMedia.link + '" target="_blank" class="instagram__link instagram__video-link">' + item + '</a>';
                            }

                            if (item) {
                                item = '<div class="' + s.column + ' columns instagram__item small-down--one-whole">' + item + '</div>';
                            }
                            if (item !== '') {
                                s.el.append(item);
                                count++;
                            }
                            if (count == s.limit) {
                                break;
                            }
                        }
                    }
                },
                error: function() {}
            });
        }
    }
}

$('.social-feeds-wrap').each(function(index, value) {

    social.twitter();

    var $target = $(this).find(".js-instafeed");
    instagram.loadContent({
        el: $target,
        clientID: $target.data('client-id'),
        limit: $target.data('count'),
        column: $target.data('column')
    });
});

/*============================================================================
  Map
==============================================================================*/
var mapFunction = {
    init: function() {

        if ($('.lazymap').length > 0) {
            lazyframe('.lazymap');
        }

        if ($('.maps').hasClass('js-api-map')) {
            var mapsToLoad = [];
            //Create map settings array
            $('.map').each(function(i, obj) {
                mapsToLoad.push(this);
                mapsToLoad[i].sectionid = $(this).data('id');
                mapsToLoad[i].address = $(this).data('address');
                mapsToLoad[i].directions = $(this).data('directions-address');
                mapsToLoad[i].zoom = $(this).data('zoom');
                mapsToLoad[i].mapstyle = $(this).data('style');
                mapsToLoad[i].showpin = $(this).data('pin');
                mapsToLoad[i].apikey = $(this).data('api-key');
            });
            $.each(mapsToLoad, function(i, instance) {
                //Enable caching to avoid duplicate google maps files
                $.ajaxSetup({
                    cache: true
                });
                //Load maps script and find location coordinates
                $.getScript(
                    'https://maps.googleapis.com/maps/api/js?key=' + mapsToLoad[i].apikey
                ).then(function() {
                    mapFunction.findLocation(mapsToLoad[i]);
                    $.ajaxSetup({
                        cache: false
                    });
                });
            });
        }
    },
    findLocation: function(mapArray) {
        var geoLat;
        var geoLng;
        var geocoder = new google.maps.Geocoder();
        //Find and set coordinates
        geocoder.geocode({
            address: mapArray.address
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                geoLat = results[0].geometry.location.lat();
                geoLng = results[0].geometry.location.lng();
                //Create map
                mapFunction.initMap(geoLat, geoLng, mapArray);
            } else {
                console.log('Error:' + status);
            }
        });
    },
    initMap: function(lat, lng, mapArray) {
        var location = {
            lat: lat,
            lng: lng
        };
        var styleJson = [];
        //Set style JSON
        if (mapArray.mapstyle == 'aubergine') {
            styleJson = [{
                elementType: 'geometry',
                stylers: [{
                    color: '#1d2c4d'
                }]
            }, {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#8ec3b9'
                }]
            }, {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#1a3646'
                }]
            }, {
                featureType: 'administrative.country',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#4b6878'
                }]
            }, {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#64779e'
                }]
            }, {
                featureType: 'administrative.province',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#4b6878'
                }]
            }, {
                featureType: 'landscape.man_made',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#334e87'
                }]
            }, {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{
                    color: '#023e58'
                }]
            }, {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{
                    color: '#283d6a'
                }]
            }, {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#6f9ba5'
                }]
            }, {
                featureType: 'poi',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#1d2c4d'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{
                    color: '#023e58'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#3C7680'
                }]
            }, {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#304a7d'
                }]
            }, {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#98a5be'
                }]
            }, {
                featureType: 'road',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#1d2c4d'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#2c6675'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#255763'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#b0d5ce'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#023e58'
                }]
            }, {
                featureType: 'transit',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#98a5be'
                }]
            }, {
                featureType: 'transit',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#1d2c4d'
                }]
            }, {
                featureType: 'transit.line',
                elementType: 'geometry.fill',
                stylers: [{
                    color: '#283d6a'
                }]
            }, {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{
                    color: '#3a4762'
                }]
            }, {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#0e1626'
                }]
            }, {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#4e6d70'
                }]
            }]
        } else if (mapArray.mapstyle == 'retro') {
            styleJson = [{
                elementType: 'geometry',
                stylers: [{
                    color: '#ebe3cd'
                }]
            }, {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#523735'
                }]
            }, {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#f5f1e6'
                }]
            }, {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#c9b2a6'
                }]
            }, {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#dcd2be'
                }]
            }, {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#ae9e90'
                }]
            }, {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{
                    color: '#dfd2ae'
                }]
            }, {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{
                    color: '#dfd2ae'
                }]
            }, {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#93817c'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{
                    color: '#a5b076'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#447530'
                }]
            }, {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#f5f1e6'
                }]
            }, {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{
                    color: '#fdfcf8'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#f8c967'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#e9bc62'
                }]
            }, {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{
                    color: '#e98d58'
                }]
            }, {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#db8555'
                }]
            }, {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#806b63'
                }]
            }, {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{
                    color: '#dfd2ae'
                }]
            }, {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#8f7d77'
                }]
            }, {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#ebe3cd'
                }]
            }, {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{
                    color: '#dfd2ae'
                }]
            }, {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{
                    color: '#b9d3c2'
                }]
            }, {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#92998d'
                }]
            }]
        } else if (mapArray.mapstyle == 'silver') {
            styleJson = [{
                elementType: 'geometry',
                stylers: [{
                    color: '#f5f5f5'
                }]
            }, {
                elementType: 'labels.icon',
                stylers: [{
                    visibility: 'off'
                }]
            }, {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#616161'
                }]
            }, {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#f5f5f5'
                }]
            }, {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#bdbdbd'
                }]
            }, {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{
                    color: '#eeeeee'
                }]
            }, {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#757575'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#e5e5e5'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9e9e9e'
                }]
            }, {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#ffffff'
                }]
            }, {
                featureType: 'road.arterial',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#757575'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#dadada'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#616161'
                }]
            }, {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9e9e9e'
                }]
            }, {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{
                    color: '#e5e5e5'
                }]
            }, {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{
                    color: '#eeeeee'
                }]
            }, {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#c9c9c9'
                }]
            }, {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9e9e9e'
                }]
            }]
        } else if (mapArray.mapstyle == 'night') {
            styleJson = [{
                elementType: 'geometry',
                stylers: [{
                    color: '#242f3e'
                }]
            }, {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#746855'
                }]
            }, {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#242f3e'
                }]
            }, {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            }, {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#263c3f'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#6b9a76'
                }]
            }, {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#38414e'
                }]
            }, {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#212a37'
                }]
            }, {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9ca5b3'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#746855'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#1f2835'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#f3d19c'
                }]
            }, {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#2f3948'
                }]
            }, {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            }, {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#17263c'
                }]
            }, {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#515c6d'
                }]
            }, {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#17263c'
                }]
            }]
        } else {
            styleJson = []
        }
        //Create google maps link
        $('.js-map-link').attr(
            'href',
            'https://www.google.com/maps/place/' +
            mapArray.directions +
            '/@' +
            lat +
            ',' +
            lng
        );
        //Set map options
        var mapOptions = {
            zoom: mapArray.zoom,
            center: location,
            styles: styleJson,
            disableDefaultUI: false
        };
        //Create map
        var map = new google.maps.Map(
            document.getElementById(mapArray.sectionid),
            mapOptions
        );
        //Show pin
        if (mapArray.showpin == true) {
            var marker = new google.maps.Marker({
                position: location,
                map: map
            });
        }
    }
};

/*============================================================================
  FAQ
==============================================================================*/
var faqAccordion = {
    init: function() {
        var flg = 0;
        var $faqHeading = $('.faqAccordion > dt > button');
        $('.faqAccordion > dd').attr('aria-hidden', true);
        $faqHeading.attr('aria-expanded', false);
        $faqHeading.on('click activate', function() {
            if (flg) return false;
            flg = 1;
            var state = $(this).attr('aria-expanded') === 'false' ? true : false;
            $(this).attr('aria-expanded', state);
            $(this).parent().next().slideToggle(function() {
                flg = 0;
            });
            $(this).parent().next().attr('aria-hidden', !state);
            return false;
        });
        $faqHeading.on('keydown', function(event) {
            var keyCode = event.keyCode || e.which;
            if (keyCode === 13) {
                $(this).trigger('activate');
            }
        });
    }
}

/*============================================================================
  Read more toggle
==============================================================================*/
var readMoreToggle = {
    init: function() {
        //   $('.fulltext').hide();

        $('.readmore').insertAfter('.content-truncable');
        $('.readmore').click(function(event) {
            event.preventDefault();
            var description = document.querySelector('.content-truncable');
            if (description.style.height === '') {
                description.style.height = 'auto';
            } else if (description.style.height === 'auto') {
                description.style.height = '';
            } else {
                description.style.height = '92px';
            }
            description.style.backgroundColor = "white"
            $(this).text($(this).text() == '<　收回' ? '展開　>' : '<　收回');
        });
    }
}
(function ($) {
    $(document).ready(function () {
        // Function to check if an element is overflowing
        function isOverflowing($element) {
            return $element[0].scrollHeight > $element[0].clientHeight;
        }

        // Select all .wpfFilterContent elements but skip the first one
        $('.wpfFilterContent').slice(1).each(function() {
            var $filterContent = $(this);
            var $filterVerScroll = $filterContent.find('.wpfFilterVerScroll');

            // Check if the content is overflowing
            if (isOverflowing($filterVerScroll)) {
                // Create and append the button
                var $button = $('<div class="wp-block-button is-style-read-more-link wbw-filter-more"><a class="wp-block-button__link has-black-color has-text-color has-link-color has-text-align-center wp-element-button">More</a></div>');
                $filterContent.append($button);

                // Bind click event to the button
                $button.on('click', function() {
                    $filterVerScroll.toggleClass('wp-height');
                    var isExpanded = $filterVerScroll.hasClass('wp-height');
                    $button.find('a').text(isExpanded ? 'Less' : 'More');
                });

                // Initial check to set the button text appropriately
                $button.find('a').text('More');
            }
        });
    });
})(jQuery);

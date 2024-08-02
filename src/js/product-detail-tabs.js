(function ($) {
    $(document).ready(function () {
        $('.tab').on('click', function (evt) {
            evt.preventDefault();
            $(this).removeClass('active');
            $(this).addClass('active');
            var sel = this.getAttribute('data-toggle-target');
            $('.tab-content').removeClass('active').filter(sel).addClass('active');
        });

        $('.tab-1').on('click', function (evt) {
            evt.preventDefault();
            $(this).addClass('active');
            $('.tab-2').removeClass('active');
        });

        $('.tab-2').on('click', function (evt) {
            evt.preventDefault();
            $(this).addClass('active');
            $('.tab-1').removeClass('active');
        });


        $('.tab-1-readmore').on('click', function (evt) {
            evt.preventDefault();
            var innerTab = $('.tab-inner-1');
            readMoreTabs(this, innerTab);
        });
        $('.tab-2-readmore').on('click', function (evt) {
            evt.preventDefault();
            var innerTab = $('.tab-inner-2');
            readMoreTabs(this, innerTab);
        });

        function readMoreTabs(readMore, tabInner) {
            var readMoreBtn = readMore;
            var tabInnerContent = tabInner;
            tabInnerContent.toggleClass('active');
            if (tabInnerContent.hasClass('active')) {
                $(readMoreBtn).text('Read less -');
            } else {
                $(readMoreBtn).text('Read more +');
            }
        }
    });


})(jQuery);
///////////////////////////////////////////////////////////////////////////////////////////
// External Links 1.0
// Version 1.0
// @requires jQuery v1.3.2
// 
// Copyright (c) 2009 Mark Ashley Bell
// Examples and docs at: http://markashleybell.com/jquery/jquery.externallink.html
// 
// Dual licensed under the MIT and GPL licenses:
// http://www.opensource.org/licenses/mit-license.php
// http://www.gnu.org/licenses/gpl.html
///////////////////////////////////////////////////////////////////////////////////////////

(function($)
{
    $.fn.externalLink = function()
    {        
        this.each(function()
        {
			$(this).find('a[rel="external"]')
				   .addClass('externallink')
				   .bind('click', function() { window.open($(this).attr('href')); return false; })
				   .each(function(){
						if($(this).attr('title'))
							$(this).attr('title', $(this).attr('title') + ' (opens in new window)');
						else
							$(this).attr('title', '(Opens in new window)');
					});
				
        });

        return this;
    };

})(jQuery);
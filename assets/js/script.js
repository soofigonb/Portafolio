$(document).ready(function() {
    
    $('.nav-link').hover(
        function() {
            $(this).css({
                'background-color': 'rgba(255, 255, 255, 0.8)', 
                'color': '#ff69b4', 
                'border-radius': '15px', 
                'padding': '10px 15px'
            });
        },
        function() {
            $(this).css({
                'background-color': '', 
                'color': '', 
                'border-radius': '15px',
                'padding': '' 
            });
        }
    );

    $('#uno').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.2)',
                'color': '#ff69b4'
            });
            $(this).css('transition', 'transform 0.3s ease, color 0.3s ease');
        },
        function() {
            $(this).css({
                'transform': 'scale(1)',
                'color': '' 
            });
        }
    );

    $('#uno').click(function() {
        window.location.href = 'sobremi.html';
    });
   
    
    

    $('#dos').hover(
        function() {
            $(this).css('color', '#ff69b4');
            $(this).css('transition', 'color 0.3s ease');
        },
        function() {
            $(this).css('color', ''); 
        }
    );

    $('#nombre').hover(
        function() {
            $(this).css('color', '#ff69b4');  
        },
        function() {
            $(this).css('color', ''); 
        }
    );
    $('.back-arrow').on('click', function() {
        window.location.href = 'index.html';
    });

    $('.polaroid-container .info p, .polaroid-container .social-link a, .polaroid-container .chile p').hover(
        function() {
            $(this).css('color', '#ff69b4');  
        },
        function() {
            $(this).css('color', '');  
        }
    );
    $('.nombre').hover(
        function() {
            $(this).css('color', '#ff69b4');  
        },
        function() {
            $(this).css('color', '');
        }
    );
    $('.card, .polaroid').hover(
        function() {
            $(this).addClass('enlarged');
        },
        function() {
            $(this).removeClass('enlarged');
        }
    );

    

        function scrollToSection(hash) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500);
        }
    
        // Configuración para SKYP
        var skypHash = '#skyp';
        var backToProyectosHash = '#proyectos';
    
        $('a[href="' + skypHash + '"]').on('click', function(event) {
            event.preventDefault(); 
            scrollToSection(skypHash);
            $('#skyp-card').show(); 
            $('#aero-card').hide(); 
            $('#mentel-card').hide();
            $('#banca-card').hide();
        });
    
        $('.skyp-card .btn-close').on('click', function() {
            scrollToSection(backToProyectosHash);
            $('#skyp-card').show(); 
            $('#aero-card').hide();
            $('#mentel-card').hide(); 
            $('#banca-card').hide();
        });
    
        // Configuración para AeroVia
        var aeroviaHash = '#aerovia';
        var backToProyectosHashAero = '#proyectos';
    
        $('a[href="' + aeroviaHash + '"]').on('click', function(event) {
            event.preventDefault(); 
            scrollToSection(aeroviaHash);
            $('#aero-card').show(); 
            $('#skyp-card').hide();
            $('#mentel-card').hide();
            $('#banca-card').hide();
        });
    
        $('.aero-card .btn-close').on('click', function() {
            scrollToSection(backToProyectosHashAero);
            $('#aero-card').show(); 
            $('#skyp-card').hide(); 
            $('#mentel-card').hide();
            $('#banca-card').hide();
        });
    
        // Configuración para Mentel
        var mentelHash = '#mentel';
        var backToProyectosHashMentel = '#proyectos';
    
        $('a[href="' + mentelHash + '"]').on('click', function(event) {
            event.preventDefault(); 
            scrollToSection(mentelHash);
            $('#mentel-card').show(); 
            $('#skyp-card').hide(); 
            $('#aero-card').hide(); 
            $('#banca-card').hide();
        });
    
        $('.mentel-card .btn-close').on('click', function() {
            scrollToSection(backToProyectosHashMentel);
            $('#mentel-card').show(); 
            $('#skyp-card').hide(); 
            $('#aero-card').hide(); 
            $('#banca-card').hide();
        });
    
        // Configuración para Banca
        var bancaHash = '#banca';
        var backToProyectosHashBanca = '#proyectos';
    
        $('a[href="' + bancaHash + '"]').on('click', function(event) {
            event.preventDefault(); 
            scrollToSection(bancaHash);
            $('#banca-card').show();
            $('#mentel-card').hide(); 
            $('#skyp-card').hide(); 
            $('#aero-card').hide();
        });
    
        $('.banca-card .btn-close').on('click', function() {
            scrollToSection(backToProyectosHashBanca);
            $('#banca-card').show();
            $('#mentel-card').hide(); 
            $('#skyp-card').hide(); 
            $('#aero-card').hide();
        });
    
        
        $('.ver-mas-btn').on('click', function(event) {
            var href = $(this).siblings('a').attr('href'); 
            scrollToSection(href);
            
            if (href === '#skyp') {
                $('#skyp-card').show(); 
                $('#aero-card').hide(); 
                $('#mentel-card').hide(); 
                $('#banca-card').hide();
            } else if (href === '#aerovia') {
                $('#aero-card').show(); 
                $('#skyp-card').hide(); 
                $('#mentel-card').hide(); 
                $('#banca-card').hide();
            } else if (href === '#mentel') {
                $('#mentel-card').show(); 
                $('#skyp-card').hide(); 
                $('#aero-card').hide(); 
                $('#banca-card').hide();
            } else if (href === '#banca') {
                $('#banca-card').show(); 
                $('#skyp-card').hide(); 
                $('#aero-card').hide(); 
                $('#mentel-card').hide();
            }
        });
    
        // Agrandamiento de imágenes
        $('#skyp-card img').hover(
            function() {
                $(this).addClass('enlarged');
            },
            function() {
                $(this).removeClass('enlarged');
            }
        );
    
        $('#aero-card .aero-card-img-top').hover(
            function() {
                $(this).addClass('enlarged');
            },
            function() {
                $(this).removeClass('enlarged');
            }
        );
    
        $('#mentel-card img').hover(
            function() {
                $(this).addClass('enlarged');
            },
            function() {
                $(this).removeClass('enlarged');
            }
        );
    
        $('#banca-card .banca-card-img-top').hover(
            function() {
                $(this).addClass('enlarged');
            },
            function() {
                $(this).removeClass('enlarged');
            }
        );


        $('.experiencia-courses_item').hover(
            function() {
              
              $(this).addClass('enlarge');
            }, 
            function() {
              
              $(this).removeClass('enlarge');
            }
          );
          $('h2.pro').hover(
            function() {
                $(this).css('color', '#ff69b4');
            },
            function() {
                $(this).css('color', ''); 
            }
        );
    
        $('h2.exp').hover(
            function() {
                $(this).css('color', '#ff69b4');
            },
            function() {
                $(this).css('color', ''); 
            }
        );

        $('h2.conta').hover(
            function() {
                $(this).css('color', '#ff69b4');
            },
            function() {
                $(this).css('color', ''); 
            }
        );

        $('#contacto2').on('submit', function(event) {
            event.preventDefault();
            
            if ($('#nombre-form').val() && $('#apellido-form').val() && $('#email-form').val() && $('#message-form').val()) {
                alert('Gracias por contactarme, nos comunicaremos contigo!');
                window.location.href = 'index.html#home'; 
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
        

        $('.form-background').hover(
            function() {
                $(this).css('transform', 'scale(1.05)');
            }, function() {
                $(this).css('transform', 'scale(1)');
            }
        );

        $('footer .footer-logos a').hover(
            function() {
              $(this).addClass('enlarged');
            },
            function() {
              $(this).removeClass('enlarged');
            }
          );

    
    
});




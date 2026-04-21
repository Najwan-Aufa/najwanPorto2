
        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const icon = btn.querySelector('i');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            
            // Change Icon
            if(menu.classList.contains('hidden')){
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-md');
                navbar.classList.replace('h-20', 'h-16');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.replace('h-16', 'h-20');
            }
        });

        // Simple Form Handler
        function handleSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Terkirim!';
            btn.classList.add('bg-green-600', 'hover:bg-green-700');
            btn.classList.remove('bg-arch-dark', 'hover:bg-gray-800');
            
            alert("Pesan Anda telah disimulasikan terkirim. Terima kasih!");

            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('bg-green-600', 'hover:bg-green-700');
                btn.classList.add('bg-arch-dark', 'hover:bg-gray-800');
                e.target.reset();
            }, 3000);
        }

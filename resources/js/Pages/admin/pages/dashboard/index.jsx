import React from 'react';
import $ from 'jquery';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';

const index = () => {
    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
        };
    });

    return <div id='page-top'>
        <div id="wrapper">

            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">
                
                <div id="content">

                    <Navbar />

                    <div className="container-fluid">

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatum saepe aliquam recusandae, vel reprehenderit illo aspernatur odit tempore quia perferendis deserunt minus quasi ipsam placeat cum explicabo ad ab, velit doloremque excepturi neque dolorem! Dolores, tempora voluptates quibusdam labore praesentium hic minima explicabo adipisci aspernatur assumenda? Numquam deserunt unde maxime necessitatibus repudiandae, recusandae porro quo nostrum. Dolores fugit aliquam excepturi optio nobis ipsa facere, rerum officia pariatur eius ipsum quia consectetur cupiditate earum quae quas ab vero hic cum impedit voluptates culpa quis tenetur debitis? Consequatur perferendis, cum mollitia nisi optio dignissimos nobis iure iste natus doloremque et corrupti?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatum saepe aliquam recusandae, vel reprehenderit illo aspernatur odit tempore quia perferendis deserunt minus quasi ipsam placeat cum explicabo ad ab, velit doloremque excepturi neque dolorem! Dolores, tempora voluptates quibusdam labore praesentium hic minima explicabo adipisci aspernatur assumenda? Numquam deserunt unde maxime necessitatibus repudiandae, recusandae porro quo nostrum. Dolores fugit aliquam excepturi optio nobis ipsa facere, rerum officia pariatur eius ipsum quia consectetur cupiditate earum quae quas ab vero hic cum impedit voluptates culpa quis tenetur debitis? Consequatur perferendis, cum mollitia nisi optio dignissimos nobis iure iste natus doloremque et corrupti?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatum saepe aliquam recusandae, vel reprehenderit illo aspernatur odit tempore quia perferendis deserunt minus quasi ipsam placeat cum explicabo ad ab, velit doloremque excepturi neque dolorem! Dolores, tempora voluptates quibusdam labore praesentium hic minima explicabo adipisci aspernatur assumenda? Numquam deserunt unde maxime necessitatibus repudiandae, recusandae porro quo nostrum. Dolores fugit aliquam excepturi optio nobis ipsa facere, rerum officia pariatur eius ipsum quia consectetur cupiditate earum quae quas ab vero hic cum impedit voluptates culpa quis tenetur debitis? Consequatur perferendis, cum mollitia nisi optio dignissimos nobis iure iste natus doloremque et corrupti?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatum saepe aliquam recusandae, vel reprehenderit illo aspernatur odit tempore quia perferendis deserunt minus quasi ipsam placeat cum explicabo ad ab, velit doloremque excepturi neque dolorem! Dolores, tempora voluptates quibusdam labore praesentium hic minima explicabo adipisci aspernatur assumenda? Numquam deserunt unde maxime necessitatibus repudiandae, recusandae porro quo nostrum. Dolores fugit aliquam excepturi optio nobis ipsa facere, rerum officia pariatur eius ipsum quia consectetur cupiditate earum quae quas ab vero hic cum impedit voluptates culpa quis tenetur debitis? Consequatur perferendis, cum mollitia nisi optio dignissimos nobis iure iste natus doloremque et corrupti?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatum saepe aliquam recusandae, vel reprehenderit illo aspernatur odit tempore quia perferendis deserunt minus quasi ipsam placeat cum explicabo ad ab, velit doloremque excepturi neque dolorem! Dolores, tempora voluptates quibusdam labore praesentium hic minima explicabo adipisci aspernatur assumenda? Numquam deserunt unde maxime necessitatibus repudiandae, recusandae porro quo nostrum. Dolores fugit aliquam excepturi optio nobis ipsa facere, rerum officia pariatur eius ipsum quia consectetur cupiditate earum quae quas ab vero hic cum impedit voluptates culpa quis tenetur debitis? Consequatur perferendis, cum mollitia nisi optio dignissimos nobis iure iste natus doloremque et corrupti?</p>

                    </div>

                </div>

                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2021</span>
                        </div>
                    </div>
                </footer>
            </div>

            {/* <!-- Scroll to Top Button--> */}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
        </div>
    </div>;
}


export default index;
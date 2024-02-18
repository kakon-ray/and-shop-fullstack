import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia'
import axios from 'axios';
import { Link } from '@inertiajs/react'
import Swal from 'sweetalert2';
import HeaderNav from '../../component/Navbar/HeaderNav';
import TopNav from '../../component/Navbar/TopNav';
import PageBanner from '../../component/PageBanner/PageBanner';
import Footer from '../../component/Footer/Footer';
import NewCollection from '../../component/NewCollection/NewCollection';


const Home = () => {

    return (
        <>
            <TopNav />
            <HeaderNav />
            <PageBanner />
            <NewCollection/>

            <div className="container">
                <div className="row mt-2">
                    <div className="col-lg-12">
                        <h2 className='text-center py-4'>Our Laptop</h2>
                    </div>
                    <div className="col-lg-12 table-responsive-sm">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aut ipsa sequi autem quo, quas sunt quaerat voluptatem perspiciatis nobis cum ex doloribus in dignissimos dolores suscipit nihil aliquid optio eum. Facere consequuntur omnis esse dolore nobis, vero delectus maxime quos officia? Voluptate culpa quisquam non ad nesciunt eum aspernatur in saepe eos at quis temporibus alias soluta odio mollitia quae pariatur illum, adipisci molestias ducimus natus sint omnis asperiores. A, porro non? Vero ut tempore dolores distinctio! Praesentium assumenda pariatur non facere culpa, laboriosam vero, ipsam fugit, deleniti eius minus soluta adipisci? Voluptatibus nostrum maxime at fugiat blanditiis cum, iure dolorum et labore officia voluptate optio? Pariatur obcaecati nesciunt aut corrupti quo maxime ut suscipit sequi quod sed hic voluptatem laboriosam ipsa voluptates inventore consequatur quia possimus, sint ea mollitia. Aut voluptates in, quos voluptatibus rem maxime magni nulla eos fuga minima assumenda molestiae autem, ullam molestias quod recusandae! Aperiam eius, asperiores eos nostrum earum repellat rem sapiente tempore similique, pariatur dignissimos dolorum odio illum error voluptatum itaque quas? Blanditiis doloribus est, omnis inventore quam nulla, beatae sit, aperiam maiores hic voluptates cum esse recusandae rem quibusdam voluptate animi debitis laborum nemo vel accusamus! Saepe magnam ullam cum, error in quam. Placeat quo modi vero pariatur unde praesentium commodi enim atque incidunt, vel perspiciatis saepe at excepturi tempora dolor error nam aut. Veniam, cum voluptatem dolor animi dicta minima, quae laudantium minus delectus hic officia voluptatibus magnam eum labore nemo quo amet provident optio nesciunt! Porro odit saepe molestias, tempora cumque doloremque. Atque, perspiciatis! Doloremque, voluptatum, necessitatibus accusamus ab facere minus eveniet iste provident officiis quasi unde perspiciatis nulla repudiandae ex qui aliquam odit? Nisi fugiat reiciendis minus laudantium nam, consequatur, eius quidem porro cupiditate repellat sequi, doloribus ad repellendus ratione! Id dicta voluptates alias aspernatur nostrum mollitia iste? Et doloremque, voluptate vitae quas sunt commodi consectetur voluptates vel animi dignissimos laborum minima explicabo fugit! At, possimus nostrum assumenda quos ab delectus quibusdam aperiam repellat eius dolorum! Sapiente corrupti dolor eum ullam unde doloribus dolorem fugiat. Eius cupiditate, fugit quae illo et blanditiis expedita maxime animi labore velit in mollitia, repellendus ad quos est delectus, harum corporis iste facilis ea fugiat. Ad expedita odit, accusamus labore totam voluptatibus cupiditate, magni quia temporibus illo consequatur quae obcaecati doloremque dolorem at corrupti nobis rem tempora ullam. Magni, recusandae! Repudiandae laborum vero mollitia. Hic eius necessitatibus minima? Itaque nam cum aliquam eligendi facilis ad! Dignissimos ab inventore tempora excepturi. Quibusdam rem, dignissimos iste amet fuga dolore, quidem et officiis tempora culpa, ducimus at esse quasi doloribus voluptates ratione magnam iure temporibus! Quaerat, libero ab aperiam blanditiis debitis, autem obcaecati eum excepturi incidunt officia ad! Sint expedita aliquid neque ratione vitae laborum! Deleniti, aut. Eligendi expedita quod earum nam veritatis alias, iste, hic deleniti iure, commodi aperiam. Animi deserunt voluptatum sapiente. Esse, dolores impedit rerum modi quo quas perspiciatis aspernatur ex omnis atque eos id deleniti dicta assumenda consequuntur, minima ad inventore. Nulla, minima sint. Asperiores eligendi ab suscipit ad ea vel vitae.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}


export default Home;
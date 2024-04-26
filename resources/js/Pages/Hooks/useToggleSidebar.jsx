import {useState , useEffect} from "react";

const useTggleSidebar = () => {

        // Toggle the side navigation
        $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
            $("body").toggleClass("sidebar-toggled");
            $(".sidebar").toggleClass("toggled");
            if ($(".sidebar").hasClass("toggled")) {
                $('.sidebar .collapse').collapse('hide');
            };
        });
}
 
export default useTggleSidebar;
<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <!-- Custom fonts for this template-->
        <link href="{{ asset('admin/vendor/fontawesome-free/css/all.min.css') }}" rel="stylesheet" type="text/css">
        <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet">

        <!-- Custom styles for this template-->
        <link href="{{ asset('admin/vendor/datatables/dataTables.bootstrap4.min.css') }}" rel="stylesheet">
        <link href="{{ asset('admin/css/sb-admin-2.css') }}" rel="stylesheet">

        @routes
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        @inertiaHead
    </head>

    <body>
        @inertia

      
        <!-- Bootstrap core JavaScript-->
        <script src="{{ asset('admin/vendor/jquery/jquery.min.js') }}"></script>
        <script src="{{ asset('admin/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>

        <!-- Core plugin JavaScript-->
        <script src="{{ asset('admin/vendor/jquery-easing/jquery.easing.min.js') }}"></script>

        <!-- Custom scripts for all pages-->

        <script src="{{ asset('admin/js/sb-admin-2.min.js') }}"></script>

        <!-- Page level plugins -->
        {{-- <script src="{{ asset('admin/vendor/chart.js/Chart.min.js') }}"></script> --}}
        <!-- Page level custom scripts -->
        {{-- <script src="{{ asset('admin/js/demo/chart-area-demo.js') }}"></script>
        <script src="{{ asset('admin/js/demo/chart-pie-demo.js') }}"></script>
        <script src="{{ asset('admin/js/auth.js') }}"></script> --}}

        {{-- datatables  --}}
        <script src="{{ asset('admin/vendor/datatables/jquery.dataTables.min.js') }}"></script>
        <script src="{{ asset('admin/vendor/datatables/dataTables.bootstrap4.min.js') }}"></script>
        <script src="{{ asset('admin/js/demo/datatables-demo.js') }}"></script>
        <script src="{{ asset('admin/js/custome.js') }}"></script>

        <!-- sweetalert -->
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

        <!-- axios -->
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    </body>

</html>

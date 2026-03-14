

function Navigation() {
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
         <a class="navbar-brand fw-bold" href="#">Amdox</a>

         <div class="ms-auto">
        <a href="${pageContext.request.contextPath}/loginPage" class="btn btn-outline-light me-2">Login here </a>
        <a href="/register" class="btn btn-warning">Get Started</a>
       </div>
      </nav>

        </div>
    );  
}

export default Navigation;  
# HTML Element Dependency Service
Makes some html elements dependent on others

# Import
`
<script src="src/js/HTMLElementDependencyService.js"></script>
`

# Initialization
You can create the service by defining the root element of the dependencies.
`
const dependency_service=new HTMLElementDependencyService(document.body);
`
Then just start the service.
`
dependency_service.start();
`

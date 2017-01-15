(function () {
    class PostComponent {
        constructor(data) {
            this.templete = document.getElementById('template-post-component').innerHTML;
            this.$renderComponent = document.getElementById('contents');
            this.render(this.templete, data);
        }

        render(template, data) {
            let compailTemplate = Mustache.render(template, data);
            let parser = new DOMParser();
            let $document = parser.parseFromString(compailTemplate, 'text/html');
            let firstElement = $document.body.firstChild;
            this.$renderComponent.appendChild(firstElement);
        }
    }
    window.blog.components.PostComponent = PostComponent;
}());

(function () {

    class PostAddFormComponent {
        constructor(data) {
            this.templete = document.getElementById('template-post-add-form-component').innerHTML;
            this.$renderComponent = document.getElementById('contents');
            this.render(this.templete, data);
            this.setupClick();

        }

        render(template, data) {
            let compileTemplate = Mustache.render(template, data);
            let parser = new DOMParser();
            let $document = parser.parseFromString(compileTemplate, 'text/html');
            let firstElement = $document.body.firstChild;
            this.$renderComponent.appendChild(firstElement);
        }

        setupClick() {
            let $submit = this.$renderComponent.querySelector('#form');
            $submit.addEventListener('submit', function (e) {
                e.preventDefault();
                let formDataObject = {};
                let data = new FormData($submit);
                for (let [k, v] of data) {
                    formDataObject[k] = v;
                }
                window.blog.runtime.trigger('form-send', formDataObject);
            });
        }
    }

    window.blog.components.PostAddFormComponent = PostAddFormComponent;
}());
(function () {
    let PostController = window.blog.controllers.PostController;
    let controller = new PostController;
    let router = new Grapnel({hashBang: true});
    router.get('/posts', controller.onPostListHandler.bind(controller));
    router.get('/posts/:id', controller.onPostHandler.bind(controller));
    let routerPath = router.path();
    if (!routerPath) {
        router.navigate('/posts');
    }
}());
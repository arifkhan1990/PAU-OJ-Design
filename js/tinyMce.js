tinymce.init({
    selector: 'textarea#problemDescription',
    height: 300,
	plugins: [
		"advlist autolink lists link image charmap print preview anchor",
		"searchreplace visualblocks code fullscreen",
		"insertdatetime media table paste imagetools wordcount",
		"code"
	],
	toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code ",
	content_css: [
	],
	menubar:false
	});
tinymce.init({
    selector: 'textarea#problemConstraints',
    plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table paste imagetools wordcount",
        "code"
    ],
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code ",
    content_css: "/css/tinyMce.css",
    menubar:false
    });
tinymce.init({
    selector: 'textarea#problemSampleInput',
    plugins: [
        "code"
    ],
    toolbar: "code ",
    content_css: [
        '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
        '//www.tiny.cloud/css/codepen.min.css'
    ],
    menubar:false
    });
tinymce.init({
    selector: 'textarea#problemSampleOutput',
    plugins: [
        "code"
    ],
    toolbar: "code ",
    content_css: [
        '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
        '//www.tiny.cloud/css/codepen.min.css'
    ],
    menubar:false
    });

tinymce.init({
        selector: 'textarea#explaineSampleInput',
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste imagetools wordcount",
            "code"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code ",
        content_css: "/css/tinyMce.css",
        menubar:false
        });
tinymce.init({
    selector: 'textarea#problemEditorial',
    plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table paste imagetools wordcount",
        "code"
    ],
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code ",
    content_css: [
        '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
        '//www.tiny.cloud/css/codepen.min.css'
    ],
    menubar:false
    });


    tinymce.init({
        selector: 'textarea#testCaseInput',
        plugins: [
            "code"
        ],
        toolbar: "code ",
        content_css: [
            '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
            '//www.tiny.cloud/css/codepen.min.css'
        ],
        menubar:false
        });
    tinymce.init({
        selector: 'textarea#testCaseOutput',
        plugins: [
            "code"
        ],
        toolbar: "code ",
        content_css: [
            '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
            '//www.tiny.cloud/css/codepen.min.css'
        ],
        menubar:false
        });

    tinymce.init({
        selector: 'textarea#problemSolutionCode',
        plugins: [
            "code"
        ],
        toolbar: "code ",
        content_css: [
            '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
            '//www.tiny.cloud/css/codepen.min.css'
        ],
        menubar:false
        });
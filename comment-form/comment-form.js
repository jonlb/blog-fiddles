window.addEvent('domready', function(){
    var container = new Jx.Container({
        parent: 'container',
        topLevel: true,
        items: [{
            'class': Jx.Panel,
            options: {
                image: 'images/page_white_world.png',
                hideTitle: true,
                menu: true,
                height: 400,
                id: 'commentPanel',
                items: [{
                    'class': 'form',
                    options: {
                        name: 'commentForm',
                        formClass: 'jxFormInlineblock',
                        items: [{
                            //name
                            'class': 'text',
                            options: {
                                label: 'Name',
                                name: 'author',
                                id: 'author',
                                required: true
                            }
                        },{
                            //email
                            'class': 'text',
                            options: {
                                label: 'Email',
                                name: 'email',
                                id: 'email',
                                required: true
                            }
                        },{
                            //website
                            'class': 'text',
                            options: {
                                label: 'Website',
                                name: 'url',
                                id: 'url',
                                required: true
                            }
                        },{
                            //comment
                            'class': 'editor',
                            options: {
                                name: 'description',
                                label: 'Description',
                                id: 'description',
                                required: true,
                                value: '',
                                editorOptions: {
                                    editorCssFile: 'css/editor.css',
                                    buttons: [
                                        ['bold','italic','underline','strikethrough','separator','alignment',
                                          'separator','orderedlist','unorderedlist','indent','outdent','separator','undo','redo'],
                                        [{ name: 'customStyles',
                                           options: {
                                               styles: ['small','large','hide','quiet','loud','highlight',
                                                    'added','removed','first','last','top','bottom']
                                            }
                                        },'block', 'separator', 'link','unlink', 'image','separator', 'toggle']
                                    ]
                                }
                            }
                        }],
                        plugins: [{
                            name: 'validator',
                            options: {
                                fields: {
                                    'author': {
                                        validators: ['minLength:5', 'maxLength:30']
                                    },
                                    'email': {
                                        //Need to add the empty validators array which will force it to
                                        //also pick up the required option in the field itself.
                                        validators: []
                                    },
                                    'url': {
                                        validators: []
                                    }
                                }
                            }
                        },{
                            name: 'notifier',
                            options: {
                                notifierType: 'inline'
                            }
                        }]
                    }
                }]
            }
        }]
    });    
});
window.addEvent('domready', function(){
    new Jx.Container({
        items: [{
            'class': 'panel',
            options: {
                parent: 'body',
                hideTitle: true,
                id: 'commentPanel',
                items: [{
                    'class': 'form',
                    options: {
                        name: 'commentForm',
                        formClass: 'jxFormBlock',
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
class SerializerProperty(object):

    def __init__(self, *args, **kwargs):
        return super(SerializerProperty, self).__init__(*args, **kwargs)

    @property
    def _model(self):
        return self.serializer_class.Meta.model
from django.test import TestCase
from .models import Card

class CardModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Card.objects.create(name='Tarot Card')
        Card.objects.create(meaning='Themes')
        Card.objects.create(reversal='Reverse')
        Card.objects.create(card_id=1)
        Card.objects.create(image='static/img/thefool.jpg')

    def test_name_content(self):
        card = Card.objects.get(id=1)
        expected_object_name = f'{card.name}'
        self.assertEquals(expected_object_name, 'Tarot Card')

    def test_meaning_content(self):
        card = Card.objects.get(id=1)
        expected_object_name = f'{card.meaning}'
        self.assertEquals(expected_object_name, 'Themes')

    def test_reversal_content(self):
        card = Card.objects.get(id=1)
        expected_object_name = f'{card.reversal}'
        self.assertEquals(expected_object_name, 'Reverse')

    def test_card_id_content(self):
        card = Car.objects.get(id=1)
        expected_object_name = f'{card.card_id}'
        self.assertEquals(expected_object_name, 1)



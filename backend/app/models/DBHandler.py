from pymongo import MongoClient

class DBHandler:
    def __init__(self, host, port):
        self.client = MongoClient(host + ":" + port)
        self.collection = {}
        self.collection['users'] = self.client.Codein.users

    def insert_document(self, collection_name, document):
        result = self.collection[collection_name].insert_one(document).inserted_id
        return str(result)  # contains the inserted_id (result.inserted_id)

    def update_document(self, collection_name, document):
        result = self.collection[collection_name].update_one(document).inserted_id
        return str(result)  # contains the inserted_id (result.inserted_id)

    def append_document(self, collection_name, id, id_value, document, tag ):
        result = self.collection[collection_name].update({id : id_value}, {'$push': {tag: document}})
        return "Success"  # contains the inserted_id (result.inserted_id)

    def find_document_with_email(self,collection_name, document):
        result = self.collection[collection_name].find_one({"email": str(document)})
        return result

    def delete_document_with_email(self, collection_name, email):
        return self.collection[collection_name].delete_many({"email": email})
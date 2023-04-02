migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n9hh9e2fqw2i3q2")

  collection.updateRule = ""
  collection.deleteRule = ""
  collection.indexes = [
    "CREATE INDEX `_n9hh9e2fqw2i3q2_created_idx` ON `user` (`created`)",
    "CREATE UNIQUE INDEX `idx_unique_ggj21wsq` ON `user` (`address`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ggj21wsq",
    "name": "address",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 42,
      "max": 42,
      "pattern": "^0x[a-fA-F0-9]{40}$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n9hh9e2fqw2i3q2")

  collection.updateRule = null
  collection.deleteRule = null
  collection.indexes = [
    "CREATE INDEX `_n9hh9e2fqw2i3q2_created_idx` ON `user` (`created`)",
    "CREATE UNIQUE INDEX \"idx_unique_ggj21wsq\" on \"user\" (\"address\")"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ggj21wsq",
    "name": "address",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 42,
      "max": 42,
      "pattern": "^0x[a-fA-F0-9]{40}$"
    }
  }))

  return dao.saveCollection(collection)
})

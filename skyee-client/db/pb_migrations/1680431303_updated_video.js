migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ki8v93qcpz57j5o")

  collection.updateRule = ""
  collection.deleteRule = ""
  collection.indexes = [
    "CREATE INDEX `_ki8v93qcpz57j5o_created_idx` ON `video` (`created`)",
    "CREATE UNIQUE INDEX `idx_unique_jt6oqfd0` ON `video` (`asset_id`)",
    "CREATE UNIQUE INDEX `idx_unique_dnimyyic` ON `video` (`playback_id`)",
    "CREATE UNIQUE INDEX `idx_unique_gheq3a1w` ON `video` (`playback_url`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jt6oqfd0",
    "name": "asset_id",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dnimyyic",
    "name": "playback_id",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gheq3a1w",
    "name": "playback_url",
    "type": "url",
    "required": true,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ki8v93qcpz57j5o")

  collection.updateRule = null
  collection.deleteRule = null
  collection.indexes = [
    "CREATE INDEX `_ki8v93qcpz57j5o_created_idx` ON `video` (`created`)",
    "CREATE UNIQUE INDEX \"idx_unique_jt6oqfd0\" on \"video\" (\"asset_id\")",
    "CREATE UNIQUE INDEX \"idx_unique_dnimyyic\" on \"video\" (\"playback_id\")",
    "CREATE UNIQUE INDEX \"idx_unique_gheq3a1w\" on \"video\" (\"playback_url\")"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jt6oqfd0",
    "name": "asset_id",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dnimyyic",
    "name": "playback_id",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gheq3a1w",
    "name": "playback_url",
    "type": "url",
    "required": true,
    "unique": true,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
})

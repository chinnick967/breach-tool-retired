exports.accounts = {
    lookup: {
        name: "lookup",
        description: "Look up player account using a parameter",
        type: "GET",
        uri: "/api/cs/lookupaccount",
        parameters: [
            {
                name: "EnmasseUserID",
                prettyName: "En Masse User ID",
                placeholder: "123456",
                type: "int",
                optional: true
            },
            {
                name: "AccountId",
                prettyName: "QC Games Account ID",
                placeholder: "123456",
                type: "int",
                optional: true
            },
            {
                name: "CharacterId",
                prettyName: "QC Games Character ID",
                placeholder: "123456",
                type: "int",
                optional: true
            },
            {
                name: "CharacterName",
                prettyName: "Character's Name (and number tag)",
                placeholder: "coolguy#8445",
                type: "string",
                optional: true
            }
        ]
    },
    ban: {
        name: "ban",
        description: "Ban a user's account",
        type: "POST",
        uri: "/api/cs/ban",
        paremeters: [
            {
                name: "CSAgentId",
                prettyName: "CS Agent ID",
                type: "string",
                placeholder: "CSAgent1",
                optional: false
            },
            {
                name: "EnmasseUserIDs",
                prettyName: "En Masse User IDs",
                type: "array",
                placeholder: "123456",
                optional: false
            },
            {
                name: "BanDuration",
                prettyName: "Ban Duration",
                type: "string",
                placeholder: "P1DT12H",
                optional: false
            },
            {
                name: "Memo",
                prettyName: "Ban Memo",
                placeholder: "This person is mean and said 'nuggets are sooo 2017' to coolguy#8445 at 10:45pm",
                type: "string",
                optional: false
            },
            {
                name: "KickPlayer",
                prettyName: "Kick Player",
                placeholder: "true",
                type: "bool",
                optional: false
            }
        ]
    }
}
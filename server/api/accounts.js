exports.apiList = {
    lookup: {
        name: "Find User",
        description: "Look up a player's game account using one parameter",
        type: "GET",
        uri: "/api/cs/lookupaccount",
        note: "Only one field needs to be completed for submission",
        parameters: [
            {
                name: "EnmasseUserID",
                prettyName: "En Masse User ID",
                placeholder: "123456",
                type: "int",
                required: false
            },
            {
                name: "AccountId",
                prettyName: "QC Games Account ID",
                placeholder: "123456",
                type: "int",
                required: false
            },
            {
                name: "CharacterId",
                prettyName: "QC Games Character ID",
                placeholder: "123456",
                type: "int",
                required: false
            },
            {
                name: "CharacterName",
                prettyName: "Character's Name/Tag",
                placeholder: "coolguy#8445",
                type: "string",
                required: false
            }
        ]
    },
    ban: {
        name: "Ban User",
        description: "Ban a user's account",
        type: "POST",
        uri: "/api/cs/ban",
        note: "Only one field needs to be completed for submission",
        parameters: [
            {
                name: "CSAgentId",
                prettyName: "CS Agent ID",
                type: "string",
                placeholder: "CSAgent1",
                required: true
            },
            {
                name: "EnmasseUserIDs",
                prettyName: "En Masse User IDs",
                type: "array",
                placeholder: "123456",
                required: true
            },
            {
                name: "BanDuration",
                prettyName: "Ban Duration",
                type: "string",
                placeholder: "P1DT12H",
                required: false
            },
            {
                name: "Memo",
                prettyName: "Ban Memo",
                placeholder: "This person is mean and said 'nuggets are sooo 2017' to coolguy#8445 at 10:45pm",
                type: "blob",
                required: true
            },
            {
                name: "KickPlayer",
                prettyName: "Kick Player",
                placeholder: "true",
                type: "bool",
                required: true
            }
        ]
    }
}
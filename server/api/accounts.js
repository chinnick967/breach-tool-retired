exports.apiList = {
    info: {
        name: "User Accounts"
    },
    lookup: {
        name: "Find User",
        description: "Look up a player's game account using one parameter",
        type: "GET",
        uri: "/api/cs/lookupaccount",
        note: "Find by character name/tag or Account Id. Only fill in ONE field, more than one will return an error.",
        authority: false,
        parameters: [
            {
                name: "QCMasterAccount",
                prettyName: "QC Master Account ID",
                placeholder: "123456",
                type: "int",
                required: false
            },
            {
                name: "QCGameAccount",
                prettyName: "QC's Account ID for Breach",
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
            },
            {
                name: "AccountId",
                prettyName: "QC Internal Account Id",
                placeholder: "123456",
                type: "int",
                required: false
            }
        ]
    },
    partialLookup: {
        name: "Regex Search",
        description: "Find player using a REGEX pattern (returns list of players)",
        type: "GET",
        uri: "/api/cs/findnames",
        note: "Find player using a REGEX pattern (returns list of players)",
        parameters: [
            {
                name: "NamePattern",
                prettyName: "Regex Name Pattern",
                placeholder: "abc{2,5}",
                type: "string",
                required: true
            }
        ]
    },
    changeCharacterName: {
        name: "Change Name",
        prettyName: "Change Character Name",
        description: "Change a user's name",
        type: "POST",
        uri: "/api/cs/changecharactername",
        note: "Get a user's currency information",
        authority: true,
        parameters: [
            {
                name: "AccountId",
                prettyName: "QC Internal Account Id",
                placeholder: "123456",
                type: "int",
                required: true
            },
            {
                name: "CharacterName",
                prettyName: "Character Name",
                placeholder: "DakotaIzKewl",
                type: "string",
                required: true
            },
            {
                name: "Memo",
                prettyName: "Memo",
                placeholder: "User was using an inappropriate name.",
                type: "blob",
                required: true
            }
        ]
    },
    /*ban: {
        name: "Ban User",
        description: "Ban a user's account",
        type: "POST",
        uri: "/api/cs/ban",
        note: "This will ban the user from all Breach services",
        parameters: [
            {
                name: "AccountIds",
                prettyName: "User Account Ids",
                type: "array",
                placeholder: "123456",
                required: true
            },
            {
                name: "BanDuration",
                prettyName: "Ban Duration",
                type: "string",
                placeholder: "P1DT12H (day, hours)",
                required: true
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
    },
    unban: {
        name: "Unban User",
        description: "Unban a user's account",
        type: "POST",
        uri: "/api/cs/unban",
        note: "This will unban a user",
        parameters: [
            {
                name: "AccountIds",
                prettyName: "User Account Ids",
                type: "array",
                placeholder: "123456",
                required: true
            },
            {
                name: "Memo",
                prettyName: "Unban Memo",
                placeholder: "This person is mean and said 'nuggets are sooo 2017' to coolguy#8445 at 10:45pm",
                type: "blob",
                required: true
            }
        ]
    },*/
    getBan: {
        name: "Ban Info",
        description: "Get a user's ban information",
        type: "GET",
        uri: "/api/cs/ban",
        note: "Get information on a user's ban",
        parameters: [
            {
                name: "AccountId",
                prettyName: "User Account Id",
                type: "int",
                placeholder: "123456",
                required: true
            }
        ]
    },
    kickUser: {
        name: "Kick User",
        description: "Kick a user",
        type: "POST",
        uri: "/api/cs/kick",
        note: "Reason Code: 0-NonSpecified, 1-ServerShutdown, 2-ArchiveRestore, 3-CSAction, 4-NGSServer, Blank-CSAction",
        authority: true,
        parameters: [
            {
                name: "AccountIds",
                prettyName: "User Account Id",
                type: "array",
                placeholder: "123456",
                required: true
            },
            {
                name: "ReasonCode",
                prettyName: "Reason Code (0 - 4)",
                type: "int",
                placeholder: "2",
                required: false
            },
            {
                name: "Memo",
                prettyName: "Kick Memo",
                placeholder: "User is hacking",
                type: "blob",
                required: true
            }
        ]
    },
    userLogs: {
        name: "User Logs",
        description: "Get a list of events taken against the account",
        type: "GET",
        uri: "/api/cs/logs",
        note: "Event Types: 1-Login, 2-Logout, 3-Kick, 4-Ban, 5-Unban, 6-Take Authority, 7-Release, 8-Update account, Blank-All",
        parameters: [
            {
                name: "AccountId",
                prettyName: "User Account Id",
                type: "int",
                placeholder: "123456",
                required: true
            },
            {
                name: "EventTypes",
                prettyName: "Event Types",
                type: "int",
                placeholder: "2",
                required: false
            },
            {
                name: "From",
                prettyName: "From:",
                placeholder: "2008-09-15T15:53:00",
                type: "string",
                required: false
            },
            {
                name: "To",
                prettyName: "To:",
                placeholder: "2008-10-15T15:53:00",
                type: "string",
                required: false
            }
        ]
    }
}
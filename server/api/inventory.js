exports.apiList = {
    info: {
        name: "Inventory Management"
    },
    getCurrency: {
        name: "Get Currency",
        prettyName: "Get Currency",
        description: "Get a user's currency information",
        type: "GET",
        uri: "/api/cs/accountdata",
        note: "Get a user's currency information",
        authority: false,
        parameters: [
            {
                name: "AccountId",
                prettyName: "QC Internal Account Id",
                placeholder: "123456",
                type: "int",
                required: true
            },
            {
                name: "Components",
                prettyName: "Components",
                placeholder: "123456",
                type: "hidden",
                required: false,
                value: "CharacterInventoryAttributes"
            }
        ]
    },
    updateCurrency: {
        name: "Update Currency",
        prettyName: "Update Currency",
        description: "Update a user's currency",
        type: "POST",
        uri: "/api/cs/updatecurrency",
        note: "Update a user's currency",
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
                name: "Amount",
                prettyName: "Amount",
                placeholder: "100",
                type: "int",
                required: true
            },
            {
                name: "CurrencyType",
                prettyName: "Currency Type",
                placeholder: "123456",
                type: "dropdown",
                dropdown: [
                    {text: "Gold", value: "EarnedCurrency"},
                    {text: "QC Points", value: "PurchasedCurrency"}
                ],
                required: true
            },
            {
                name: "CurrencySource",
                prettyName: "Currency Source",
                placeholder: "123456",
                type: "dropdown",
                dropdown: [
                    {text: "Granted", value: "Granted"},
                    {text: "Purchased", value: "Purchased"}
                ],
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
    }
}
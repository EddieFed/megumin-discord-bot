Command tree

```
Management:
    User:
        - Ban [reason]
        - Kick [reason]
        - mute [reason]
        - timeout [time]
        - infofor [userID]
        Roles:
            - role add [userID] [role]
            - role remove [userID] [role]
            - role clear [userID]
        - nick [userID] [nickname]

    Channel management:
        - lock [channel] [time] [message]

    Purge:
        - Purge [int]
        - Purge contains ["string"] [int]
        - Purge notext [int]
        - Purge startswith ["string"] [int]
        - Purge endswith ["string"] [int]
        - Purge links [int]
        - Purge invites [int]
        - Purge images [int]
        - Purge mentions [int]
        - Purge embes [int]
        - Purge bots [int]
        - Purge from [UserID] [int]

    Roles:
        - Role add [role]
        - Role del [role]
        - Role ignore [role] [bool]
        - Role mentionable [role] [bool]
        - Role color [role] [hex]

    Support ticket
        - ticket open [issue] -> ticketID
        - ticket close [ticketID] 
        - ticket status [ticketID] // This will return info like time opened, time elapsed, mod assigned to ticket etc

Fun:
    - 8ball [question]
    - cuteness
    - dadjoke
    - explosion
    - metrixcantmakejokes
    - pika
    - say [message]
    NSFW: // Requires channel set to NSFW
        - boobs // Aliases {tiddies, titties, tits, boobies, melons}
        - ass // Aliases {cake, nomnomnom, booty, butts}
        - search [query] // Searches pornhub for top result
    - roll [number] // Or list of items {1, 2, 3} seperated by commas

Music:
    - play [songname/url] // User who executes must be in a voice chat
    - pause
    - stop
    - loop
    - queue list
    - queue clear
    - nowplaying
    - skip
    - voteskip
    - volume
    - shuffle
    - seek

General info:
    - info // shows bot info
    - serverinfo
    - userinfo [userID]
    - roleinfo [role]
    - channelinfo
    
```


---
layout: infrastructure-page
servers:
    - name: Synapse (Homeserver)
      description: This is the engine for the whole service - without Synapse, t2bot.io would not be able to speak Matrix or provide you with bridges, bots, and other services.
      cores: 12
      memory: 128
      storage: 2000
      storageType: NVMe
    - name: Database
      description: All of the data generated by Matrix and t2bot.io itself needs to be stored somewhere. Multiple database servers are used for redundancy, and their combined hardware is shown here.
      cores: 24
      memory: 192
      storage: 15000
      storageType: NVMe
    - name: Integration Hosts
      description: The bridges, bots, and services all run on these servers. They fluctuate in size and number, so the stats here represent the normal average for all of the servers combined.
      cores: 15
      memory: 27
      storage: 645
      storageType: SSD
---

# Infrastructure

t2bot.io consists of multiple servers which all work to host bots, bridges, and other things for people to use. All servers have a gigabit network connection to the internet and use SSD (or faster)
storage. Media (images, etc) is stored in DigitalOcean Spaces (s3-like service). Questions about the hardware t2bot.io runs on are best asked in [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io).

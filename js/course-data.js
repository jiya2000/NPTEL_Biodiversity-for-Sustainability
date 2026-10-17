/**
 * NPTEL: Biodiversity for Sustainability
 * Clean, Simple, Exam-Oriented Course Data Store
 * No emojis, clear bullet points, concise definitions
 */

window.COURSE_DATA = {
  meta: {
    courseName: "Biodiversity for Sustainability",
    tagline: "NPTEL Revision & Practice Portal",
    instructor: "NPTEL / SWAYAM",
    repoUrl: "https://github.com/jiya2000/NPTEL_Biodiversity-for-Sustainability",
    totalWeeks: 12,
    activeWeek: 2
  },
  weeks: {
    1: {
      weekNumber: 1,
      title: "Ecology, Biodiversity and Sustainability Foundations",
      subtitle: "Week 1 Revision Notes, 32 Core Definitions, Practice MCQs and Assignment 1 Solutions",
      status: "available",
      badge: "Week 1",
      
      keyPoints: [
        "Ecological hierarchy: Organism -> Population -> Community -> Ecosystem -> Biosphere.",
        "Three levels of biodiversity: Genetic diversity, species diversity, and ecosystem diversity.",
        "Three pillars of sustainability: Environmental, social, and economic.",
        "Ecosystem services: Benefits people obtain from ecosystems (e.g., pollination for food security, wetlands for water filtration, forests for carbon storage, soil microbes for nutrient cycling).",
        "Ecology is an objective natural science; environmental concern is a social and ethical response."
      ],

      hierarchy: [
        {
          level: 1,
          name: "Organism",
          def: "An individual living being.",
          example: "A single tree or single deer"
        },
        {
          level: 2,
          name: "Population",
          def: "Individuals of the same species living in a particular area.",
          example: "All spotted deer in a forest"
        },
        {
          level: 3,
          name: "Community",
          def: "Populations of different species living and interacting together in an area.",
          example: "Deer, tigers, trees, and soil bacteria interacting"
        },
        {
          level: 4,
          name: "Ecosystem",
          def: "A biological community of organisms plus their non-living (abiotic) physical environment acting as a system.",
          example: "A forest community plus its soil, sunlight, water, and climate"
        },
        {
          level: 5,
          name: "Biosphere",
          def: "The global sum of all Earth's ecosystems where life exists.",
          example: "The entire zone on Earth supporting life"
        }
      ],

      pillars: [
        {
          id: "environmental",
          title: "Environmental Sustainability",
          desc: "Maintaining ecological systems, protecting natural resources, preserving biodiversity, and respecting ecological limits."
        },
        {
          id: "social",
          title: "Social Sustainability",
          desc: "Supporting equity, well-being, inclusion, human rights, and fairness between present and future generations."
        },
        {
          id: "economic",
          title: "Economic Sustainability",
          desc: "Maintaining viable economic activity and livelihoods over the long term without depleting nature."
        }
      ],

      services: [
        {
          name: "Pollination",
          benefit: "Food Security",
          desc: "Bees, insects, and birds pollinate food crops, directly supporting agricultural yields and human nutrition."
        },
        {
          name: "Wetland Water Filtration",
          benefit: "Water Security",
          desc: "Wetlands store water, slow down storm flows, filter contaminants, and recharge groundwater aquifers."
        },
        {
          name: "Forest Carbon Storage",
          benefit: "Climate Regulation",
          desc: "Forests absorb and store atmospheric carbon, while moderating local humidity and temperature."
        },
        {
          name: "Soil Microorganisms",
          benefit: "Decomposition and Nutrient Cycling",
          desc: "Invisible bacteria, fungi, and worms break down organic matter and recycle essential soil nutrients."
        }
      ],

      traps: [
        {
          concept: "Genetic Diversity vs Species Diversity",
          trap: "Confusing variation within one species with variety among different species.",
          rule: "Genetic diversity = variation within a species or population (e.g., rice varieties). Species diversity = number and relative abundance of different species."
        },
        {
          concept: "Species Richness vs Species Evenness",
          trap: "Thinking richness measures population balance.",
          rule: "Species richness is strictly the number of different species. Species evenness is how evenly individuals are distributed among those species."
        },
        {
          concept: "Distribution vs Habitat",
          trap: "Confusing where an organism occurs with where it lives.",
          rule: "Distribution = the geographical area or places where an organism occurs. Habitat = the specific environment providing conditions for an organism to live."
        },
        {
          concept: "Community vs Ecosystem",
          trap: "Forgetting the abiotic (non-living) components in an ecosystem.",
          rule: "Community is living populations of different species. Ecosystem = Community plus its abiotic environment (temperature, soil, water)."
        },
        {
          concept: "Ecological Resilience",
          trap: "Assuming resilience means an ecosystem experiences zero disturbance.",
          rule: "Resilience is the capacity of a system to withstand disturbance and recover or maintain its essential functions."
        },
        {
          concept: "Ecology vs Environmental Concern",
          trap: "Assuming science and environmental concern are the exact same thing.",
          rule: "Ecology provides scientific evidence and explanations. Environmental concern is a social, moral, or ethical response."
        }
      ],

      definitions: [
        {
          term: "Biodiversity",
          category: "Biodiversity",
          definition: "The variety of life, including genetic, species, and ecosystem diversity."
        },
        {
          term: "Genetic diversity",
          category: "Biodiversity",
          definition: "Variation in genes within a species or population."
        },
        {
          term: "Species diversity",
          category: "Biodiversity",
          definition: "The variety of species in an area, considering both variety and relative abundance."
        },
        {
          term: "Ecosystem diversity",
          category: "Biodiversity",
          definition: "The variety of ecosystems, habitats, and ecological communities."
        },
        {
          term: "Invisible biodiversity",
          category: "Biodiversity",
          definition: "Less-visible components such as microbes, fungi, soil organisms, genetic variation, and ecological processes."
        },
        {
          term: "Ecosystem services",
          category: "Ecosystem Services",
          definition: "Benefits people obtain from ecosystems."
        },
        {
          term: "Resilience",
          category: "Ecology",
          definition: "The capacity of a system to withstand disturbance, recover, or maintain essential functions."
        },
        {
          term: "Food security",
          category: "Sustainability",
          definition: "Reliable access to sufficient, safe, and nutritious food."
        },
        {
          term: "Water security",
          category: "Sustainability",
          definition: "Reliable access to adequate, safe water."
        },
        {
          term: "Ecological simplification",
          category: "Ecology",
          definition: "Reduction in ecological complexity, such as fewer species or simpler habitats."
        },
        {
          term: "Ecology",
          category: "Ecology",
          definition: "The scientific study of interactions between organisms and their environment."
        },
        {
          term: "Organism",
          category: "Ecological Hierarchy",
          definition: "An individual living being."
        },
        {
          term: "Population",
          category: "Ecological Hierarchy",
          definition: "Individuals of the same species living in a particular area."
        },
        {
          term: "Community",
          category: "Ecological Hierarchy",
          definition: "Populations of different species living and interacting in an area."
        },
        {
          term: "Ecosystem",
          category: "Ecological Hierarchy",
          definition: "A community of organisms and its abiotic environment interacting as a system."
        },
        {
          term: "Biosphere",
          category: "Ecological Hierarchy",
          definition: "The global sum of Earth's ecosystems and regions where life exists."
        },
        {
          term: "Habitat",
          category: "Ecology",
          definition: "The place or environment where an organism lives and obtains the conditions it needs."
        },
        {
          term: "Distribution",
          category: "Ecology",
          definition: "The geographical area or places in which an organism occurs."
        },
        {
          term: "Biotic factors",
          category: "Ecology",
          definition: "Living components, such as plants, animals, and microorganisms."
        },
        {
          term: "Abiotic factors",
          category: "Ecology",
          definition: "Non-living environmental factors, such as temperature, water, light, and soil."
        },
        {
          term: "Predation",
          category: "Ecology",
          definition: "An interaction in which one organism kills and consumes another."
        },
        {
          term: "Competition",
          category: "Ecology",
          definition: "An interaction in which organisms compete for limited resources."
        },
        {
          term: "Species richness",
          category: "Biodiversity",
          definition: "The number of different species in an area."
        },
        {
          term: "Species evenness",
          category: "Biodiversity",
          definition: "How evenly individuals are distributed among species."
        },
        {
          term: "Functional diversity",
          category: "Biodiversity",
          definition: "The variety of ecological roles and traits."
        },
        {
          term: "Sustainability",
          category: "Sustainability",
          definition: "Maintaining systems and well-being over time without undermining the resources and conditions on which they depend."
        },
        {
          term: "Sustainable development",
          category: "Sustainability",
          definition: "Development that meets present needs without compromising future generations' ability to meet their own needs."
        },
        {
          term: "Environmental sustainability",
          category: "Sustainability",
          definition: "Maintaining ecological systems and natural resources."
        },
        {
          term: "Social sustainability",
          category: "Sustainability",
          definition: "Supporting equity, well-being, inclusion, and social stability."
        },
        {
          term: "Economic sustainability",
          category: "Sustainability",
          definition: "Maintaining viable economic activity over the long term."
        },
        {
          term: "Intergenerational equity",
          category: "Sustainability",
          definition: "Fairness between present and future generations."
        },
        {
          term: "Environmental injustice",
          category: "Sustainability",
          definition: "Unequal distribution of environmental harms and benefits, often disproportionately affecting vulnerable communities."
        }
      ],

      flashcards: [
        {
          id: 1,
          category: "Definition",
          front: "What is ecology?",
          back: "The scientific study of interactions between organisms and their environment (both living biotic and non-living abiotic components).",
          hint: "Interactions between organisms and their surroundings."
        },
        {
          id: 2,
          category: "Biodiversity",
          front: "What are the three levels of biodiversity?",
          back: "1. Genetic diversity (within a species)\n2. Species diversity (between different species)\n3. Ecosystem diversity (habitats and communities)",
          hint: "From genes to habitats."
        },
        {
          id: 3,
          category: "Ecological Hierarchy",
          front: "What is the sequence of increasing ecological organization?",
          back: "Organism -> Population -> Community -> Ecosystem -> Biosphere",
          hint: "Individual to global planetary level."
        },
        {
          id: 4,
          category: "Biodiversity",
          front: "What is invisible biodiversity?",
          back: "Less-visible components such as microbes, fungi, soil organisms, genetic variation, and microscopic ecological processes.",
          hint: "Small and below-ground components."
        },
        {
          id: 5,
          category: "Ecosystem Services",
          front: "How do wetlands contribute to water security?",
          back: "By storing water, slowing down runoff flows, filtering out contaminants, and recharging groundwater.",
          hint: "Water storage and purification."
        },
        {
          id: 6,
          category: "Distinction",
          front: "What is the difference between species richness and species evenness?",
          back: "Species richness is the count of different species. Species evenness is how equally individuals are distributed among those species.",
          hint: "Count versus balance."
        },
        {
          id: 7,
          category: "Distinction",
          front: "What is the difference between distribution and habitat?",
          back: "Distribution is the geographical area where an organism occurs. Habitat is the place or environment providing the conditions it needs to live.",
          hint: "Geographical area versus living conditions."
        },
        {
          id: 8,
          category: "Sustainability",
          front: "What are the three pillars of sustainability?",
          back: "Environmental, social, and economic sustainability.",
          hint: "Environment, society, and economy."
        },
        {
          id: 9,
          category: "Sustainability",
          front: "What is sustainable development?",
          back: "Development that meets present needs without compromising future generations' ability to meet their own needs.",
          hint: "Brundtland Commission definition."
        },
        {
          id: 10,
          category: "Resilience",
          front: "What is ecological resilience? Does it mean no disturbance?",
          back: "No. Resilience is the capacity of a system to withstand disturbance, recover, or maintain essential functions.",
          hint: "Ability to withstand and recover."
        },
        {
          id: 11,
          category: "Distinction",
          front: "Why is ecology not identical to environmental concern?",
          back: "Ecology provides scientific evidence and explanation, while environmental concern is a social or ethical response.",
          hint: "Science versus ethical response."
        },
        {
          id: 12,
          category: "Sustainability",
          front: "What is environmental injustice?",
          back: "When vulnerable communities disproportionately experience environmental harms and unequal distribution of environmental benefits.",
          hint: "Unequal burden of environmental harms."
        },
        {
          id: 13,
          category: "Interactions",
          front: "Why is predation an example of a community interaction?",
          back: "Because predation involves an interaction between two different species living in the same area.",
          hint: "Two species interacting."
        },
        {
          id: 14,
          category: "Services",
          front: "Why do forests contribute to climate regulation?",
          back: "Forests store carbon and influence local temperature and moisture through shade and moisture exchange.",
          hint: "Carbon storage and local climate."
        },
        {
          id: 15,
          category: "Biodiversity",
          front: "What does functional diversity refer to?",
          back: "The variety of ecological roles and traits performed by species in an ecosystem.",
          hint: "Ecological roles and traits."
        },
        {
          id: 16,
          category: "Ecosystem",
          front: "What turns a biological community into an ecosystem?",
          back: "The addition and interaction with the non-living (abiotic) environment (soil, water, temperature, air).",
          hint: "Living community plus non-living environment."
        }
      ],

      practiceMCQs: [
        {
          id: 1,
          question: "Ecology is the scientific study of:",
          options: [
            "Only plants and animals",
            "Interactions between organisms and their environment",
            "Only environmental pollution",
            "The classification of minerals"
          ],
          correct: 1,
          letter: "B",
          explanation: "Ecology studies interactions between organisms and both biotic and abiotic components."
        },
        {
          id: 2,
          question: "Which is an example of genetic diversity?",
          options: [
            "Forests and grasslands in a region",
            "Different bird species in a forest",
            "Different varieties of rice within a species",
            "Different climate zones"
          ],
          correct: 2,
          letter: "C",
          explanation: "Genetic diversity refers to genetic variation within a species or population."
        },
        {
          id: 3,
          question: "The term distribution in ecology refers to:",
          options: [
            "How organisms reproduce",
            "Where organisms occur",
            "How organisms obtain food",
            "How organisms compete"
          ],
          correct: 1,
          letter: "B",
          explanation: "Distribution describes where an organism or species occurs geographically."
        },
        {
          id: 4,
          question: "Which sequence correctly represents increasing ecological organization?",
          options: [
            "Community -> organism -> ecosystem -> population",
            "Organism -> population -> community -> ecosystem",
            "Population -> organism -> biosphere -> community",
            "Ecosystem -> population -> organism -> community"
          ],
          correct: 1,
          letter: "B",
          explanation: "The usual hierarchy proceeds from organism to population, community, ecosystem, and biosphere."
        },
        {
          id: 5,
          question: "Which is an abiotic factor?",
          options: [
            "Fungi",
            "Bacteria",
            "Temperature",
            "Grass"
          ],
          correct: 2,
          letter: "C",
          explanation: "Temperature is non-living; fungi, bacteria, and grass are living (biotic) components."
        },
        {
          id: 6,
          question: "Which is an example of a community interaction?",
          options: [
            "Rainfall entering soil",
            "Predation between two species",
            "A rock breaking down",
            "Temperature changing seasonally"
          ],
          correct: 1,
          letter: "B",
          explanation: "Predation is a biological interaction between organisms of different species."
        },
        {
          id: 7,
          question: "Which statement best defines a habitat?",
          options: [
            "The total number of species in a region",
            "A place providing suitable conditions for an organism to live",
            "All ecosystems on Earth",
            "A group of organisms of different species"
          ],
          correct: 1,
          letter: "B",
          explanation: "A habitat is the environment in which an organism lives."
        },
        {
          id: 8,
          question: "Which of the following is invisible biodiversity?",
          options: [
            "Mountains and rivers only",
            "Genes, microbes, fungi and soil life",
            "Only large mammals",
            "Only flowering plants"
          ],
          correct: 1,
          letter: "B",
          explanation: "Biodiversity includes less-visible genetic and microbial components and ecological processes."
        },
        {
          id: 9,
          question: "Species richness means:",
          options: [
            "The number of individuals in a population",
            "The number of different species in an area",
            "The genetic variation within one species",
            "The size of an ecosystem"
          ],
          correct: 1,
          letter: "B",
          explanation: "Species richness counts distinct species, not the total number of individuals."
        },
        {
          id: 10,
          question: "Species evenness describes:",
          options: [
            "The geographical range of a species",
            "The number of habitats in a region",
            "How evenly individuals are distributed among species",
            "The number of genes in one organism"
          ],
          correct: 2,
          letter: "C",
          explanation: "Evenness concerns the relative abundance of species in a community."
        },
        {
          id: 11,
          question: "Functional diversity refers to:",
          options: [
            "Variety of ecological roles and traits",
            "Variety of political systems",
            "Number of people in a city",
            "Number of mountains in a region"
          ],
          correct: 0,
          letter: "A",
          explanation: "Functional diversity captures differences in traits and ecological functions."
        },
        {
          id: 12,
          question: "Which is an example of ecosystem diversity?",
          options: [
            "Different genes in rice varieties",
            "Different ages of one deer population",
            "Forests, wetlands and grasslands across a landscape",
            "Different individuals of one species"
          ],
          correct: 2,
          letter: "C",
          explanation: "Ecosystem diversity concerns the variety of habitats and ecological systems."
        },
        {
          id: 13,
          question: "Ecosystem services are:",
          options: [
            "Benefits people obtain from ecosystems",
            "Laws regulating industries",
            "Laboratory tools for ecology",
            "Only products sold in markets"
          ],
          correct: 0,
          letter: "A",
          explanation: "Ecosystem services are the benefits people receive from ecosystems."
        },
        {
          id: 14,
          question: "How do wetlands contribute to water security?",
          options: [
            "By increasing fossil fuel production",
            "By storing and filtering water",
            "By eliminating all floods",
            "By replacing all water infrastructure"
          ],
          correct: 1,
          letter: "B",
          explanation: "Wetlands can store water, improve water quality, and moderate water flows."
        },
        {
          id: 15,
          question: "Forests contribute to climate regulation because they:",
          options: [
            "Prevent all climate variation",
            "Store carbon and influence local temperature and moisture",
            "Control only animal populations",
            "Stop all natural disasters"
          ],
          correct: 1,
          letter: "B",
          explanation: "Forest vegetation stores carbon and affects local energy and water exchanges."
        },
        {
          id: 16,
          question: "Which are the three pillars of sustainability?",
          options: [
            "Genetic, species and ecosystem",
            "Political, cultural and technological",
            "Environmental, social and economic",
            "Food, water and energy only"
          ],
          correct: 2,
          letter: "C",
          explanation: "The three widely used pillars are environmental, social, and economic sustainability."
        },
        {
          id: 17,
          question: "Sustainable development aims to:",
          options: [
            "Meet present needs while preserving future generations' ability to meet theirs",
            "Maximize short-term production regardless of harm",
            "Stop all economic development",
            "Use every available natural resource immediately"
          ],
          correct: 0,
          letter: "A",
          explanation: "This is the widely used Brundtland definition of sustainable development."
        },
        {
          id: 18,
          question: "Environmental injustice occurs when:",
          options: [
            "Everyone receives identical environmental benefits",
            "Vulnerable communities disproportionately experience environmental harms",
            "No environmental risks exist",
            "Economic activity is completely absent"
          ],
          correct: 1,
          letter: "B",
          explanation: "Environmental injustice involves unequal environmental burdens and access to benefits."
        },
        {
          id: 19,
          question: "Ecological resilience is best described as:",
          options: [
            "The absence of every disturbance",
            "The ability to withstand disturbance and recover or maintain functions",
            "The total number of species alone",
            "The speed of economic growth"
          ],
          correct: 1,
          letter: "B",
          explanation: "Resilience concerns how systems respond to disturbance and maintain or recover functions."
        },
        {
          id: 20,
          question: "Which statement correctly links ecology, biodiversity and sustainability?",
          options: [
            "All three mean exactly the same thing",
            "Ecology studies interactions, biodiversity describes life's variety, and sustainability concerns long-term persistence",
            "Biodiversity concerns only climate",
            "Ecology is limited to forests and wilderness"
          ],
          correct: 1,
          letter: "B",
          explanation: "Ecology studies interactions, biodiversity describes life's variety, and sustainability concerns long-term persistence."
        }
      ],

      assignmentMCQs: [
        {
          id: 1,
          question: "Which of the following is included in invisible biodiversity?",
          options: [
            "Mountains and rivers",
            "Genes, microbes, fungi, soil life, and ecological processes",
            "Only large animals hidden in forests",
            "Only plants growing below tree cover"
          ],
          correct: 1,
          letter: "b",
          explanation: "Invisible biodiversity includes less-visible components like microbes, soil organisms, genes, and ecological processes."
        },
        {
          id: 2,
          question: "What does the term 'distribution' refer to in ecology?",
          options: [
            "How organisms reproduce",
            "How organisms compete",
            "Where organisms occur",
            "How organisms obtain food"
          ],
          correct: 2,
          letter: "c",
          explanation: "Distribution describes the geographic locations where an organism or species occurs."
        },
        {
          id: 3,
          question: "How do wetlands contribute to water security?",
          options: [
            "By increasing fossil fuel availability",
            "By storing and filtering water",
            "By eliminating the need for forests",
            "By replacing all human water management"
          ],
          correct: 1,
          letter: "b",
          explanation: "Wetlands store water, filter contaminants, and moderate water flows."
        },
        {
          id: 4,
          question: "Which statement best describes a habitat?",
          options: [
            "A visually attractive natural location",
            "A fixed geographical point where a species was once recorded",
            "A place containing only physical conditions",
            "A functionally suitable setting in which an organism can live"
          ],
          correct: 3,
          letter: "d",
          explanation: "A habitat is a functionally suitable environment in which an organism lives and gets what it needs to survive."
        },
        {
          id: 5,
          question: "Why is ecology not identical to environmental concern?",
          options: [
            "Ecology rejects ethical thinking completely",
            "Environmental concern is based only on laboratory experiments",
            "Ecology deals only with non-living matter",
            "Ecology provides scientific evidence and explanation, while concern is a social or ethical response"
          ],
          correct: 3,
          letter: "d",
          explanation: "Ecology is an objective science, while environmental concern is a value-driven social or ethical response."
        },
        {
          id: 6,
          question: "Which of the following is an example of a community interaction?",
          options: [
            "Rainfall entering the soil",
            "Temperature changing across seasons",
            "Predation between two species",
            "A rock weathering over time"
          ],
          correct: 2,
          letter: "c",
          explanation: "Predation is an interaction between individuals of two different living species."
        },
        {
          id: 7,
          question: "What is the biosphere?",
          options: [
            "A single habitat suitable for one species",
            "The global sum of life and living systems",
            "A local group of interacting populations",
            "A laboratory model of ecological processes"
          ],
          correct: 1,
          letter: "b",
          explanation: "The biosphere is the global sum of all life, ecosystems, and regions where life exists."
        },
        {
          id: 8,
          question: "A community in ecology means:",
          options: [
            "Populations of different species living together and interacting",
            "Individuals of one species competing in one location",
            "Physical conditions without living organisms",
            "A single organism responding to environmental stress"
          ],
          correct: 0,
          letter: "a",
          explanation: "A community is all the populations of different species coexisting and interacting in an area."
        },
        {
          id: 9,
          question: "What are ecosystem services?",
          options: [
            "The benefits people obtain from ecosystems",
            "The laws created to protect forests",
            "The instruments used for field surveys",
            "The number of species in an area"
          ],
          correct: 0,
          letter: "a",
          explanation: "Ecosystem services are the direct and indirect benefits people receive from healthy ecosystems."
        },
        {
          id: 10,
          question: "At the organism level, ecology focuses on:",
          options: [
            "A single individual living being",
            "All ecosystems on Earth",
            "Only non-living environmental conditions",
            "The total number of species in a biome"
          ],
          correct: 0,
          letter: "a",
          explanation: "Organismal ecology studies the individual living being and its survival adaptations."
        }
      ]
    },

    2: {
      weekNumber: 2,
      title: "Functional Diversity, Trade-Offs and Natural Capital",
      subtitle: "Week 2 Revision Notes, 16 Core Definitions, Practice MCQs and Assignment 2 Solutions",
      status: "available",
      badge: "Week 2",
      
      keyPoints: [
        "Functional diversity: Different species perform different ecological roles.",
        "Sustainability trade-off: A situation where real benefits and real harms occur together; assess both rather than assuming a win-win outcome.",
        "Regulating services: Ecological processes that reduce risks and stabilise environmental conditions.",
        "Wetlands as natural infrastructure: Wetlands store water, slow flows, filter contaminants, and support habitat (drainage channels cannot fully replace them).",
        "Ecological feedback: Direct information from land, water, seasons, and resource use that helped early societies understand environmental limits.",
        "Industrialization impact: Increased speed, scale, and distance of production, making environmental damage easier to hide.",
        "Ecological threshold: A limit beyond which ecological change may become unsafe or difficult to reverse.",
        "Natural capital accounting: Recognising that forests, soils, water systems, wetlands, and biodiversity have real value, even when market prices do not capture it fully."
      ],

      hierarchy: [
        {
          level: 1,
          name: "Functional Diversity",
          def: "Different species performing different ecological roles (such as pollinators, decomposers, and predators).",
          example: "Bees pollinating crops while worms cycle soil nutrients"
        },
        {
          level: 2,
          name: "Regulating Services",
          def: "Processes that reduce risks and stabilise conditions through natural ecology.",
          example: "Wetlands moderating floods and filtering runoff water"
        },
        {
          level: 3,
          name: "Ecological Thresholds",
          def: "Limits beyond which ecological change can become unsafe or hard to reverse.",
          example: "Water pollution causing a lake to turn toxic or lose its fish"
        },
        {
          level: 4,
          name: "Ecological Feedback",
          def: "Direct signals from land, water, and resources showing environmental limits.",
          example: "Traditional farmers observing seasonal water levels to adjust planting"
        },
        {
          level: 5,
          name: "Natural Capital",
          def: "Nature's assets (forests, soils, water, wetlands, biodiversity) that provide real value to humanity.",
          example: "Clean water and fertile soil treated as valuable economic wealth"
        }
      ],

      pillars: [
        {
          id: "environmental",
          title: "Environmental Sustainability",
          desc: "Protecting ecological processes, biodiversity, natural resources, and resilience from crossing unsafe thresholds."
        },
        {
          id: "social",
          title: "Social Sustainability and Indicators",
          desc: "Using indicators that represent important realities, are easy to understand, and support constructive action."
        },
        {
          id: "economic",
          title: "Natural Capital in Economics",
          desc: "Making the value of nature's assets visible in decision-making, acknowledging that market prices fail to reflect full value."
        }
      ],

      services: [
        {
          name: "Wetlands as Natural Infrastructure",
          benefit: "Water Storage and Filtration",
          desc: "Wetlands store water, slow flood runoff, filter contaminants, and provide vital habitat."
        },
        {
          name: "Regulating Ecosystem Services",
          benefit: "Risk Reduction and Stabilization",
          desc: "Processes that stabilize climate, moderate floods, and clean air and water."
        },
        {
          name: "Direct Ecological Feedback",
          benefit: "Understanding Natural Limits",
          desc: "Observing changes in soil, water, and seasons to avoid overexploiting natural resources."
        },
        {
          name: "Natural Capital Accounting",
          benefit: "Real Value Visibility",
          desc: "Recognizing that unpriced natural assets like clean water and forests have essential economic value."
        }
      ],

      traps: [
        {
          concept: "The Win-Win Trap",
          trap: "Assuming every sustainability decision is a win-win with no downside.",
          rule: "Trade-offs involve both real benefits and real harms occurring together. Decisions require evaluating both sides honestly."
        },
        {
          concept: "Wetland Replacement Fallacy",
          trap: "Assuming artificial drainage channels can fully replace natural wetlands.",
          rule: "Wetlands store water, filter contaminants, and provide habitat. Their services cannot always be fully replaced by engineered drainage systems."
        },
        {
          concept: "Market Price Assumption",
          trap: "Assuming market price captures the complete value of an ecosystem.",
          rule: "Market prices frequently fail to capture the full value of ecological functions (like pollination or water filtration)."
        },
        {
          concept: "Industrial Disconnect",
          trap: "Thinking modern consumers can easily see the damage caused by products.",
          rule: "Industrialization increased speed, scale, and distance, making environmental damage easier to hide from distant consumers."
        },
        {
          concept: "Indicators Without Context",
          trap: "Assuming an indicator number means the exact same thing everywhere.",
          rule: "Indicators must be interpreted in context: the same number can mean completely different things in different settings."
        },
        {
          concept: "Ecological Thresholds",
          trap: "Assuming environmental damage is always gradual and easy to fix.",
          rule: "An ecological threshold is a critical limit beyond which change can become unsafe or difficult to reverse."
        }
      ],

      definitions: [
        {
          term: "Functional diversity",
          category: "Biodiversity",
          definition: "The variety of species performing different ecological roles."
        },
        {
          term: "Sustainability trade-off",
          category: "Sustainability",
          definition: "A situation where real benefits and real harms occur together, requiring evaluation of competing outcomes."
        },
        {
          term: "Regulating services",
          category: "Ecosystem Services",
          definition: "Ecosystem services that reduce risks and stabilise conditions through ecological processes."
        },
        {
          term: "Environmental sustainability",
          category: "Sustainability",
          definition: "Protecting ecological processes, biodiversity, resources, and resilience."
        },
        {
          term: "Wetlands as natural infrastructure",
          category: "Ecosystem Services",
          definition: "Wetlands store water, slow flows, filter contaminants, and support habitat."
        },
        {
          term: "Ecological feedback",
          category: "Ecology",
          definition: "Information or consequences from changes in land, water, seasons, and resource use that help people understand environmental limits."
        },
        {
          term: "Sustainability indicator",
          category: "Sustainability",
          definition: "A measure that represents important realities, is understandable, and supports action."
        },
        {
          term: "Composite indicator",
          category: "Sustainability",
          definition: "A measure made by combining multiple indicators into one score."
        },
        {
          term: "Industrialization and environmental impact",
          category: "Ecology",
          definition: "Industrialization increased the speed, scale, and distance of production and consumption, making some environmental damage easier to hide."
        },
        {
          term: "Ecological threshold",
          category: "Ecology",
          definition: "A limit beyond which ecological change may become unsafe or difficult to reverse."
        },
        {
          term: "Natural capital",
          category: "Sustainability",
          definition: "Nature's assets, including forests, soils, water systems, wetlands, and biodiversity, which have real value."
        },
        {
          term: "Natural capital accounting",
          category: "Sustainability",
          definition: "An approach that makes the value of natural assets more visible in accounting and decision-making."
        },
        {
          term: "Ecosystem services",
          category: "Ecosystem Services",
          definition: "Benefits people obtain from ecosystems; they can include provisioning, regulating, cultural, and supporting functions."
        },
        {
          term: "Ecological resilience",
          category: "Ecology",
          definition: "The capacity of an ecological system to withstand disturbance and maintain or recover important functions."
        },
        {
          term: "Biodiversity",
          category: "Biodiversity",
          definition: "The variety of life, including genetic, species, and ecosystem diversity."
        },
        {
          term: "Sustainability",
          category: "Sustainability",
          definition: "Considering long-term environmental, social, and economic well-being rather than only short-term gains."
        }
      ],

      flashcards: [
        {
          id: 201,
          category: "Definition",
          front: "What does functional diversity refer to?",
          back: "Different species performing different ecological roles (such as pollinators, decomposers, and soil aerators).",
          hint: "Different species doing different jobs."
        },
        {
          id: 202,
          category: "Sustainability",
          front: "What is a trade-off in sustainability analysis?",
          back: "A situation where real benefits and real harms occur together, requiring evaluation of competing outcomes rather than assuming an automatic win-win.",
          hint: "Benefits and harms happen together."
        },
        {
          id: 203,
          category: "Ecosystem Services",
          front: "What is the main role of regulating services?",
          back: "Reducing risks and stabilising conditions through ecological processes (such as wetlands filtering water or buffering floods).",
          hint: "Reducing risks and stabilizing conditions."
        },
        {
          id: 204,
          category: "Sustainability",
          front: "What does environmental sustainability primarily involve?",
          back: "Protecting ecological processes, biodiversity, resources, and resilience.",
          hint: "Processes, biodiversity, resources, and resilience."
        },
        {
          id: 205,
          category: "Natural Infrastructure",
          front: "Why can wetlands be understood as natural infrastructure?",
          back: "They store water, slow flows, filter contaminants, and support habitat.",
          hint: "Four key wetland functions."
        },
        {
          id: 206,
          category: "Exam Trap Alert",
          front: "Can wetland services always be fully replaced by drainage systems?",
          back: "No. Drainage systems cannot fully replace the water storage, biofiltration, and wildlife habitat that wetlands provide.",
          hint: "Drainage systems cannot fully replace wetlands."
        },
        {
          id: 207,
          category: "Feedback",
          front: "What helped early societies understand environmental limits?",
          back: "Direct ecological feedback from land, water, seasons, and resource use.",
          hint: "Direct feedback from their surroundings."
        },
        {
          id: 208,
          category: "Indicators",
          front: "What three things should a good sustainability indicator do?",
          back: "1. Represent important realities\n2. Be understandable\n3. Support action",
          hint: "Meaningful, clear, and actionable."
        },
        {
          id: 209,
          category: "Industrialization",
          front: "What made industrialization different from earlier forms of development?",
          back: "It increased the speed, scale, and distance of production and consumption, making damage easier to hide.",
          hint: "Speed, scale, and distance."
        },
        {
          id: 210,
          category: "Thresholds",
          front: "What does an ecological threshold indicate?",
          back: "A limit beyond which ecological change may become unsafe or difficult to reverse.",
          hint: "Unsafe or hard-to-reverse limit."
        },
        {
          id: 211,
          category: "Natural Capital",
          front: "What does natural capital include?",
          back: "Nature's assets: forests, soils, water systems, wetlands, and biodiversity.",
          hint: "Living and natural physical assets."
        },
        {
          id: 212,
          category: "Economics",
          front: "What does natural capital accounting emphasize?",
          back: "That forests, soils, water systems, wetlands, and biodiversity have real value, even when market prices do not capture it fully.",
          hint: "Making nature's real value visible."
        },
        {
          id: 213,
          category: "Economics",
          front: "Does market price capture the full value of ecosystems?",
          back: "No. Market price may fail to capture the full value of ecological functions like water filtration and climate regulation.",
          hint: "Market price often leaves out ecological value."
        },
        {
          id: 214,
          category: "Trade-off",
          front: "Give an example of a sustainability trade-off.",
          back: "A development project creates economic benefits but damages a natural wetland.",
          hint: "Benefits combined with environmental harm."
        },
        {
          id: 215,
          category: "Indicators",
          front: "Why should indicators be interpreted in context?",
          back: "Because the exact same number can mean different things in different settings.",
          hint: "Numbers depend on local conditions."
        },
        {
          id: 216,
          category: "Indicators",
          front: "What is a composite indicator?",
          back: "A measure made by combining multiple indicators into one score.",
          hint: "Combining multiple measures into one."
        }
      ],

      practiceMCQs: [
        {
          id: 201,
          question: "Which option best describes functional diversity?",
          options: [
            "The market price of natural products",
            "Different species performing different ecological roles",
            "The total number of people in a region",
            "The number of conservation laws"
          ],
          correct: 1,
          letter: "B",
          explanation: "Functional diversity focuses on ecological roles and traits, not prices or human population."
        },
        {
          id: 202,
          question: "A sustainability trade-off occurs when:",
          options: [
            "Every outcome is beneficial",
            "Real benefits and harms occur together",
            "Environmental impacts never affect society",
            "All indicators give the same result"
          ],
          correct: 1,
          letter: "B",
          explanation: "Trade-offs involve competing outcomes, so benefits and harms must be considered together."
        },
        {
          id: 203,
          question: "Which is an example of a regulating ecosystem service?",
          options: [
            "Harvesting timber as a product",
            "Wetlands filtering contaminants and moderating water flows",
            "Selling a landscape painting",
            "Extracting minerals"
          ],
          correct: 1,
          letter: "B",
          explanation: "Regulating services reduce risks or stabilise environmental conditions."
        },
        {
          id: 204,
          question: "Environmental sustainability most directly requires:",
          options: [
            "Maximising production without limits",
            "Protecting ecological processes, biodiversity, resources and resilience",
            "Valuing nature only by market prices",
            "Ignoring ecological change if economic output rises"
          ],
          correct: 1,
          letter: "B",
          explanation: "Environmental sustainability includes ecological processes and the capacity of systems to persist."
        },
        {
          id: 205,
          question: "Why are wetlands called natural infrastructure?",
          options: [
            "They are always suitable for construction",
            "They store water, slow flows, filter contaminants and provide habitat",
            "They have no ecological function",
            "They completely replace all engineered water systems"
          ],
          correct: 1,
          letter: "B",
          explanation: "Wetlands perform several functions that support water management and biodiversity."
        },
        {
          id: 206,
          question: "Early societies could learn about environmental limits through:",
          options: [
            "Direct feedback from land, water, seasons and resource use",
            "Only modern satellite monitoring",
            "Only international treaties",
            "Composite indicators invented in recent decades"
          ],
          correct: 0,
          letter: "A",
          explanation: "Direct ecological feedback makes resource constraints and environmental changes observable."
        },
        {
          id: 207,
          question: "A good sustainability indicator should:",
          options: [
            "Measure only what is easiest",
            "Represent important realities, be understandable and support action",
            "Remove all uncertainty",
            "Ignore local context"
          ],
          correct: 1,
          letter: "B",
          explanation: "Useful indicators are meaningful and actionable, not merely easy to count."
        },
        {
          id: 208,
          question: "One environmental consequence of industrialization was that:",
          options: [
            "Resource use stopped increasing",
            "Consumption and resource sources became more distant and impacts could be harder to see",
            "All environmental damage became immediately visible",
            "Natural resources were no longer needed"
          ],
          correct: 1,
          letter: "B",
          explanation: "Greater speed, scale, and distance could separate consumers from environmental consequences."
        },
        {
          id: 209,
          question: "An ecological threshold is:",
          options: [
            "A market price for a forest",
            "A limit beyond which change may become unsafe or hard to reverse",
            "A measure of population size only",
            "A guarantee that an ecosystem will recover"
          ],
          correct: 1,
          letter: "B",
          explanation: "Thresholds can mark critical limits in ecological systems."
        },
        {
          id: 210,
          question: "Natural capital includes:",
          options: [
            "Only products that have a market price",
            "Forests, soils, water systems, wetlands and biodiversity",
            "Only buildings and factories",
            "Only money held by conservation groups"
          ],
          correct: 1,
          letter: "B",
          explanation: "Natural capital includes natural assets, whether or not their full value is reflected in market prices."
        },
        {
          id: 211,
          question: "Natural capital accounting is intended to:",
          options: [
            "Ignore nature in economic decisions",
            "Make the value of natural assets visible in accounting and decision-making",
            "Replace all ecological research",
            "Assume market prices capture every ecosystem value"
          ],
          correct: 1,
          letter: "B",
          explanation: "It helps decision-makers account for natural assets and ecological functions."
        },
        {
          id: 212,
          question: "Which statement about market price is most accurate?",
          options: [
            "It always captures the full value of ecosystems",
            "It may fail to capture the full value of ecological functions",
            "It is the only valid measure of nature",
            "It makes ecological indicators unnecessary"
          ],
          correct: 1,
          letter: "B",
          explanation: "Many ecosystem benefits are not fully reflected in market prices."
        },
        {
          id: 213,
          question: "Which is a possible consequence of crossing an ecological threshold?",
          options: [
            "Change is always harmless",
            "Ecological change may become unsafe or difficult to reverse",
            "The ecosystem becomes economically profitable",
            "All uncertainty disappears"
          ],
          correct: 1,
          letter: "B",
          explanation: "Thresholds can mark points after which impacts become severe or hard to reverse."
        },
        {
          id: 214,
          question: "Which option best describes a trade-off between development and conservation?",
          options: [
            "A project creates benefits but also damages a wetland",
            "A project has no costs or benefits",
            "A decision avoids collecting evidence",
            "An indicator is written in simple language"
          ],
          correct: 0,
          letter: "A",
          explanation: "A trade-off arises when benefits and harms coexist."
        },
        {
          id: 215,
          question: "A composite indicator is:",
          options: [
            "A measure made by combining multiple indicators into one score",
            "A natural wetland",
            "A species performing a role",
            "An ecological threshold"
          ],
          correct: 0,
          letter: "A",
          explanation: "Composite indicators combine multiple measures, but they can obscure important context if used carelessly."
        },
        {
          id: 216,
          question: "Why should indicators be interpreted in context?",
          options: [
            "Context makes every indicator useless",
            "The same number can mean different things in different settings",
            "Context removes the need for data",
            "Indicators are always exact measures of all realities"
          ],
          correct: 1,
          letter: "B",
          explanation: "Context helps explain what a measure means and whether it supports an appropriate action."
        },
        {
          id: 217,
          question: "Which action best reflects environmental sustainability?",
          options: [
            "Protecting biodiversity and ecological processes while managing resources responsibly",
            "Maximising extraction without measuring effects",
            "Replacing every wetland with drainage channels",
            "Ignoring ecological resilience"
          ],
          correct: 0,
          letter: "A",
          explanation: "Environmental sustainability considers biodiversity, ecological processes, resources, and resilience."
        },
        {
          id: 218,
          question: "Which is NOT a safe assumption about wetlands?",
          options: [
            "They can store water",
            "They can filter contaminants",
            "They support habitat",
            "Their services can always be fully replaced by drainage systems"
          ],
          correct: 3,
          letter: "D",
          explanation: "The official solutions explicitly reject the assumption that drainage can always fully replace wetland services."
        },
        {
          id: 219,
          question: "Why can environmental damage be harder to notice in industrial systems?",
          options: [
            "Production and consumption may be separated by greater distance and scale",
            "Industrialization removes all ecological impacts",
            "Resource sources are always next to consumers",
            "Damage is always immediately visible everywhere"
          ],
          correct: 0,
          letter: "A",
          explanation: "Greater scale, speed, and distance can hide environmental consequences from consumers."
        },
        {
          id: 220,
          question: "Which statement best links natural capital and sustainability?",
          options: [
            "Natural assets have value and should be considered in decisions",
            "Nature matters only when sold in markets",
            "Ecological functions should be ignored in economic planning",
            "All ecosystem values can be represented by one market price"
          ],
          correct: 0,
          letter: "A",
          explanation: "Natural capital accounting emphasises the real value of forests, soils, water, wetlands, and biodiversity."
        }
      ],

      assignmentMCQs: [
        {
          id: 201,
          question: "What does functional diversity refer to?",
          options: [
            "The total market value of ecosystem products",
            "Different species performing different ecological roles",
            "The number of development projects in a region",
            "The use of one indicator for multiple systems"
          ],
          correct: 1,
          letter: "b",
          explanation: "Functional diversity refers to different species performing different ecological roles."
        },
        {
          id: 202,
          question: "What is a trade-off in sustainability analysis?",
          options: [
            "A situation where real benefits and real harms occur together",
            "A decision that supports all three pillars equally",
            "A case where ecological damage has no social effect",
            "A method for avoiding evidence-based assessment"
          ],
          correct: 0,
          letter: "a",
          explanation: "A trade-off is a situation where real benefits and real harms occur together, requiring evaluation of competing outcomes."
        },
        {
          id: 203,
          question: "What is the main role of regulating services?",
          options: [
            "Reducing risks and stabilising conditions through ecological processes",
            "Supplying only direct material goods",
            "Replacing social indicators in development planning",
            "Measuring ecosystem value through one composite score"
          ],
          correct: 0,
          letter: "a",
          explanation: "Regulating services reduce risks and stabilise environmental conditions through ecological processes."
        },
        {
          id: 204,
          question: "What does environmental sustainability primarily involve?",
          options: [
            "Protecting ecological processes, biodiversity, resources, and resilience",
            "Increasing production without measuring ecological effects",
            "Ensuring compensation after environmental damage",
            "Treating nature only as a source of market products"
          ],
          correct: 0,
          letter: "a",
          explanation: "Environmental sustainability primarily involves protecting ecological processes, biodiversity, resources, and resilience."
        },
        {
          id: 205,
          question: "Why can wetlands be understood as natural infrastructure?",
          options: [
            "They store water, slow flows, filter contaminants, and support habitat",
            "They are empty spaces suitable for quick conversion",
            "They only provide scenic value to nearby residents",
            "Their services can always be fully replaced by drainage systems"
          ],
          correct: 0,
          letter: "a",
          explanation: "Wetlands store water, slow flows, filter contaminants, and support habitat."
        },
        {
          id: 206,
          question: "What helped many early societies understand environmental limits?",
          options: [
            "Direct ecological feedback from land, water, seasons, and resource use",
            "International environmental agreements",
            "Industrial monitoring systems",
            "Modern composite indicators"
          ],
          correct: 0,
          letter: "a",
          explanation: "Direct ecological feedback from land, water, seasons, and resource use made environmental limits observable to early societies."
        },
        {
          id: 207,
          question: "What should a good sustainability indicator do?",
          options: [
            "Count whatever is easiest to measure",
            "Replace interpretation with numerical certainty",
            "Ignore context to allow simple comparison",
            "Represent important realities, be understandable, and support action"
          ],
          correct: 3,
          letter: "d",
          explanation: "A good sustainability indicator represents important realities, is understandable, and supports action."
        },
        {
          id: 208,
          question: "What made industrialization different from earlier forms of development?",
          options: [
            "It removed the need for natural resources",
            "It made ecological damage immediately visible everywhere",
            "It reduced the distance between consumption and resource sources",
            "It increased speed, scale, and distance, making damage easier to hide"
          ],
          correct: 3,
          letter: "d",
          explanation: "Industrialization increased speed, scale, and distance, which made environmental damage easier to hide."
        },
        {
          id: 209,
          question: "What does an ecological threshold indicate?",
          options: [
            "A point where social benefits become impossible to measure",
            "A market price at which ecosystem services become profitable",
            "A limit beyond which ecological change may become unsafe or difficult to reverse",
            "A planning method that removes uncertainty from sustainability decisions"
          ],
          correct: 2,
          letter: "c",
          explanation: "An ecological threshold indicates a limit beyond which ecological change may become unsafe or difficult to reverse."
        },
        {
          id: 210,
          question: "What does natural capital accounting emphasise?",
          options: [
            "Nature should be valued only when it produces goods for markets",
            "Forests, soils, water systems, wetlands, and biodiversity have real value",
            "Economic decisions should ignore ecological functions",
            "Market price always captures the full value of ecosystems"
          ],
          correct: 1,
          letter: "b",
          explanation: "Natural capital accounting emphasises that forests, soils, water systems, wetlands, and biodiversity have real value."
        }
      ]
    },

    3: {
      weekNumber: 3,
      title: "Ecosystem Goods, Services and Valuation",
      subtitle: "Upcoming Lectures and Assignment 3",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 3 will be populated upon receipt of lecture content."
    },
    4: {
      weekNumber: 4,
      title: "Threats to Biodiversity: Habitat Loss and Invasions",
      subtitle: "Upcoming Lectures and Assignment 4",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 4 will be populated upon receipt of lecture content."
    },
    5: {
      weekNumber: 5,
      title: "Climate Change and Ecological Resilience",
      subtitle: "Upcoming Lectures and Assignment 5",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 5 will be populated upon receipt of lecture content."
    },
    6: {
      weekNumber: 6,
      title: "Conservation Biology and Protected Areas",
      subtitle: "Upcoming Lectures and Assignment 6",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 6 will be populated upon receipt of lecture content."
    },
    7: {
      weekNumber: 7,
      title: "Sustainable Agriculture and Forest Management",
      subtitle: "Upcoming Lectures and Assignment 7",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 7 will be populated upon receipt of lecture content."
    },
    8: {
      weekNumber: 8,
      title: "Urban Ecology and Green Infrastructure",
      subtitle: "Upcoming Lectures and Assignment 8",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 8 will be populated upon receipt of lecture content."
    },
    9: {
      weekNumber: 9,
      title: "Circular Economy and Resource Sustainability",
      subtitle: "Upcoming Lectures and Assignment 9",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 9 will be populated upon receipt of lecture content."
    },
    10: {
      weekNumber: 10,
      title: "Environmental Policy, Law and Global Treaties",
      subtitle: "Upcoming Lectures and Assignment 10",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 10 will be populated upon receipt of lecture content."
    },
    11: {
      weekNumber: 11,
      title: "Community-Based Conservation and Indigenous Knowledge",
      subtitle: "Upcoming Lectures and Assignment 11",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 11 will be populated upon receipt of lecture content."
    },
    12: {
      weekNumber: 12,
      title: "Comprehensive Final Exam Prep and Grand Mock Tests",
      subtitle: "Final Revision, Mock Exams and Complete Syllabus Review",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Final exam revision tests and comprehensive multi-week review drills."
    }
  }
};

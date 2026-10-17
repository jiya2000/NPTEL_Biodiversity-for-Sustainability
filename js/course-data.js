/**
 * NPTEL: Biodiversity for Sustainability
 * Comprehensive Course Data Store
 * Structured for Week-by-Week Modular Expansion
 */

window.COURSE_DATA = {
  meta: {
    courseName: "Biodiversity for Sustainability",
    tagline: "NPTEL Master Revision & Interactive Practice Portal",
    instructor: "NPTEL / SWAYAM",
    repoUrl: "https://github.com/jiya2000/NPTEL_Biodiversity-for-Sustainability",
    totalWeeks: 12,
    activeWeek: 1
  },
  weeks: {
    1: {
      weekNumber: 1,
      title: "Ecology, Biodiversity & Sustainability Foundations",
      subtitle: "Exam Revision Notes, 32 Key Definitions, 20 Practice MCQs & Assignment 1 Solutions",
      status: "available",
      badge: "Week 1 Ready",
      summary: "Foundational concepts covering the hierarchy of ecology (Organism to Biosphere), the three levels of biodiversity, invisible microbial life, crucial ecosystem services, pillars of sustainability, and environmental justice.",
      
      hierarchy: [
        {
          level: 1,
          name: "Organism",
          def: "An individual living being that interacts directly with abiotic and biotic surroundings.",
          icon: "🌱",
          example: "A single Oak tree or one Bengal tiger"
        },
        {
          level: 2,
          name: "Population",
          def: "Individuals belonging to the same species living together in a defined geographical area.",
          icon: "👥",
          example: "All spotted deer in Kaziranga National Park"
        },
        {
          level: 3,
          name: "Community",
          def: "Populations of different species living and interacting together in an area.",
          icon: "🐾",
          example: "Tigers, deer, grasses, and soil bacteria interacting in a forest"
        },
        {
          level: 4,
          name: "Ecosystem",
          def: "A biological community of interacting organisms plus their physical abiotic environment acting as a system.",
          icon: "🏞️",
          example: "The entire Sundarbans mangrove swamp (biotic + water, salinity, soil)"
        },
        {
          level: 5,
          name: "Biosphere",
          def: "The global sum of all Earth's ecosystems and zones where life exists.",
          icon: "🌍",
          example: "The entire global zone of air, water, and soil supporting life"
        }
      ],

      pillars: [
        {
          id: "environmental",
          title: "Environmental Sustainability",
          icon: "🌿",
          color: "#10b981",
          desc: "Maintaining healthy ecological systems, protecting natural resources, preserving biodiversity, and respecting ecological carrying capacity."
        },
        {
          id: "social",
          title: "Social Sustainability",
          icon: "🤝",
          color: "#3b82f6",
          desc: "Supporting equity, well-being, community inclusion, human rights, social stability, and intergenerational fairness."
        },
        {
          id: "economic",
          title: "Economic Sustainability",
          icon: "📈",
          color: "#f59e0b",
          desc: "Maintaining viable, responsible economic activity and livelihoods over the long term without depleting nature."
        }
      ],

      services: [
        {
          name: "Pollination",
          benefit: "Food Security",
          icon: "🐝",
          desc: "Bees, insects, and birds pollinate over 75% of leading food crops, directly sustaining global agricultural food security."
        },
        {
          name: "Wetlands Filtration",
          benefit: "Water Security & Flood Control",
          icon: "💧",
          desc: "Wetlands naturally filter pollutants, recharge groundwater aquifers, and buffer against devastating floods and storm surges."
        },
        {
          name: "Forest Carbon Storage",
          benefit: "Climate Regulation",
          icon: "🌲",
          desc: "Forests sequester atmospheric carbon and regulate microclimates, maintaining stable local humidity and temperature regimes."
        },
        {
          name: "Soil Microorganisms",
          benefit: "Nutrient Cycling & Decomposition",
          icon: "🔬",
          desc: "Invisible bacteria, mycorrhizal fungi, and nematodes break down organic detritus, recycling nitrogen, phosphorus, and essential minerals."
        }
      ],

      traps: [
        {
          concept: "Genetic vs Species Diversity",
          trap: "Confusing variation WITHIN a species with variety of DIFFERENT species.",
          rule: "Genetic diversity = variation within ONE species/population (e.g., thousands of rice varieties). Species diversity = count & relative abundance of different species in a community."
        },
        {
          concept: "Species Richness vs Species Evenness",
          trap: "Thinking richness means how balanced the population numbers are.",
          rule: "Richness is strictly the total NUMBER of distinct species. Evenness describes HOW EQUALLY individuals are distributed among those species."
        },
        {
          concept: "Distribution vs Habitat",
          trap: "Treating where an organism lives and its geographical range as synonyms.",
          rule: "Distribution = the geographical area/region where a species occurs on a map. Habitat = the specific physical & functional environment where it obtains survival conditions."
        },
        {
          concept: "Community vs Ecosystem",
          trap: "Forgetting the abiotic components in an ecosystem.",
          rule: "Community is purely BIOTIC (all interacting populations of different species). Ecosystem = Community + ABIOTIC environment (soil, water, climate) interacting as a unified system."
        },
        {
          concept: "Ecological Resilience",
          trap: "Believing resilience means an ecosystem never experiences any disturbance.",
          rule: "Resilience is the dynamic capacity to withstand disturbance, absorb shock, and recover or maintain essential functions."
        },
        {
          concept: "Ecology vs Environmental Concern",
          trap: "Assuming ecology and environmental activism are the identical concept.",
          rule: "Ecology is an objective scientific discipline that generates empirical evidence and explanations. Environmental concern is a moral, social, or ethical response based on human values."
        }
      ],

      definitions: [
        {
          term: "Biodiversity",
          category: "Biodiversity",
          definition: "The variety of life on Earth, encompassing genetic diversity, species diversity, and ecosystem diversity."
        },
        {
          term: "Genetic Diversity",
          category: "Biodiversity",
          definition: "Variation in genes, alleles, and hereditary traits within a single species or population (e.g. wild vs cultivated rice varieties)."
        },
        {
          term: "Species Diversity",
          category: "Biodiversity",
          definition: "The variety of species in an area, considering both species richness (variety) and relative abundance (evenness)."
        },
        {
          term: "Ecosystem Diversity",
          category: "Biodiversity",
          definition: "The variety of ecosystems, habitats, landscapes, and ecological communities across a geographical territory."
        },
        {
          term: "Invisible Biodiversity",
          category: "Biodiversity",
          definition: "Less-visible but critical components such as microbes, mycorrhizal fungi, soil nematodes, micro-crustaceans, genetic variations, and invisible ecological processes."
        },
        {
          term: "Ecosystem Services",
          category: "Ecosystem Services",
          definition: "Direct and indirect benefits that human beings obtain from healthy natural ecosystems (provisioning, regulating, supporting, and cultural)."
        },
        {
          term: "Resilience",
          category: "Ecology",
          definition: "The capacity of an ecological system to withstand external disturbances, recover from shocks, or maintain vital structural functions."
        },
        {
          term: "Food Security",
          category: "Sustainability",
          definition: "Reliable, uninterrupted access to sufficient, safe, nutritious, and culturally acceptable food for an active and healthy life."
        },
        {
          term: "Water Security",
          category: "Sustainability",
          definition: "Reliable access to adequate quantities of acceptable quality water for sustaining livelihoods, human well-being, and socio-economic development."
        },
        {
          term: "Ecological Simplification",
          category: "Ecology",
          definition: "The reduction in ecological complexity, such as conversion of biodiverse rainforests or grasslands into monoculture plantations or simpler habitats."
        },
        {
          term: "Ecology",
          category: "Ecology",
          definition: "The rigorous scientific study of interactions between living organisms and their biotic and abiotic environment."
        },
        {
          term: "Organism",
          category: "Ecological Hierarchy",
          definition: "An individual living being that possesses all characteristics of life and functions independently."
        },
        {
          term: "Population",
          category: "Ecological Hierarchy",
          definition: "A group of individuals belonging to the same species living and interbreeding in a particular geographical area."
        },
        {
          term: "Community",
          category: "Ecological Hierarchy",
          definition: "All populations of different species coexisting, interacting, and sharing resources within a common geographic area."
        },
        {
          term: "Ecosystem",
          category: "Ecological Hierarchy",
          definition: "A dynamic biological community of organisms interacting with each other and their abiotic physical environment as an integrated unit."
        },
        {
          term: "Biosphere",
          category: "Ecological Hierarchy",
          definition: "The global ecological system integrating all living beings and their relationships; the planetary zone where life flourishes."
        },
        {
          term: "Habitat",
          category: "Ecology",
          definition: "The specific physical place or environment in which an organism normally lives and obtains the resources, shelter, and conditions it requires."
        },
        {
          term: "Distribution",
          category: "Ecology",
          definition: "The geographical area, range, or spatial locations across which an organism or species naturally occurs."
        },
        {
          term: "Biotic Factors",
          category: "Ecology",
          definition: "The living or once-living components of an ecosystem that influence other organisms (plants, animals, fungi, bacteria)."
        },
        {
          term: "Abiotic Factors",
          category: "Ecology",
          definition: "The non-living physical and chemical components of the environment, such as ambient temperature, sunlight, moisture, minerals, and soil pH."
        },
        {
          term: "Predation",
          category: "Ecology",
          definition: "A biological interaction in which one organism (the predator) hunts, captures, kills, and consumes another organism (the prey)."
        },
        {
          term: "Competition",
          category: "Ecology",
          definition: "An ecological interaction between organisms or species in which both are harmed while vying for the same limited resource (food, light, space)."
        },
        {
          term: "Species Richness",
          category: "Biodiversity",
          definition: "The total number of different distinct species represented in an ecological community, landscape, or region."
        },
        {
          term: "Species Evenness",
          category: "Biodiversity",
          definition: "A measure of how evenly the total individual organisms in a community are apportioned among the different coexisting species."
        },
        {
          term: "Functional Diversity",
          category: "Biodiversity",
          definition: "The variety of biological traits, roles, and ecological functions that organisms perform within an ecosystem (e.g. nitrogen fixing, scavengers, apex predators)."
        },
        {
          term: "Sustainability",
          category: "Sustainability",
          definition: "Maintaining the integrity of natural and socio-economic systems over time without undermining the fundamental resources and conditions on which they depend."
        },
        {
          term: "Sustainable Development",
          category: "Sustainability",
          definition: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs (Brundtland Commission, 1987)."
        },
        {
          term: "Environmental Sustainability",
          category: "Sustainability",
          definition: "Conserving ecological integrity, preserving natural resources, and maintaining biodiversity for indefinite ecological equilibrium."
        },
        {
          term: "Social Sustainability",
          category: "Sustainability",
          definition: "Fostering social equity, well-being, community cohesion, basic human rights, inclusion, and societal stability over generations."
        },
        {
          term: "Economic Sustainability",
          category: "Sustainability",
          definition: "Practicing viable, resilient economic activities that generate prosperity without triggering irreversible resource depletion or environmental degradation."
        },
        {
          term: "Intergenerational Equity",
          category: "Sustainability",
          definition: "The moral and ethical principle of fairness and balance in the distribution of resources and environmental health between current and future human generations."
        },
        {
          term: "Environmental Injustice",
          category: "Sustainability",
          definition: "The disproportionate exposure of marginalized, low-income, or vulnerable communities to environmental risks, pollution, and resource extraction harms."
        }
      ],

      flashcards: [
        {
          id: 1,
          category: "Core Definition",
          front: "What is the precise definition of 'Ecology'?",
          back: "The scientific study of interactions between organisms and their environment (both biotic living factors and abiotic non-living physical factors).",
          hint: "Focus on both living and non-living interactions."
        },
        {
          id: 2,
          category: "Biodiversity Levels",
          front: "Name the three foundational levels of Biodiversity.",
          back: "1. Genetic Diversity (within species)\n2. Species Diversity (between species)\n3. Ecosystem Diversity (habitats & biomes)",
          hint: "From genes up to planetary biomes."
        },
        {
          id: 3,
          category: "Ecological Hierarchy",
          front: "What is the correct sequence of increasing ecological organization?",
          back: "Organism → Population → Community → Ecosystem → Biosphere",
          hint: "From single being to global planetary scale."
        },
        {
          id: 4,
          category: "Invisible Biodiversity",
          front: "What constitutes 'Invisible Biodiversity' and why does it matter?",
          back: "Microbes, mycorrhizal fungi, soil nematodes, genetic variation, and microscopic nutrient-cycling processes that sustain life unseen.",
          hint: "Think below ground and at the microscopic scale."
        },
        {
          id: 5,
          category: "Ecosystem Services",
          front: "How do wetlands specifically contribute to human water security?",
          back: "By natural hydrological storage, biological filtration of contaminants, groundwater recharge, and flood shock buffering.",
          hint: "Nature's kidneys and shock absorbers."
        },
        {
          id: 6,
          category: "Distinction Trap",
          front: "What is the difference between Species Richness and Species Evenness?",
          back: "Richness is the raw COUNT of different species. Evenness is HOW EQUALLY individuals are numerically distributed among those species.",
          hint: "Count vs Balance."
        },
        {
          id: 7,
          category: "Distinction Trap",
          front: "Distinguish between 'Distribution' and 'Habitat' in ecology.",
          back: "Distribution is the GEOGRAPHICAL AREA/RANGE where a species occurs. Habitat is the LOCAL ENVIRONMENT providing the necessary survival conditions.",
          hint: "Macro map area vs Micro living conditions."
        },
        {
          id: 8,
          category: "Sustainability Pillars",
          front: "What are the three pillars of Sustainability?",
          back: "1. Environmental (ecological integrity)\n2. Social (equity & human well-being)\n3. Economic (long-term viable prosperity)",
          hint: "Planet, People, Prosperity."
        },
        {
          id: 9,
          category: "Sustainability Definition",
          front: "What is the standard Brundtland definition of Sustainable Development?",
          back: "'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.'",
          hint: "Our needs now without robbing our grandchildren."
        },
        {
          id: 10,
          category: "Resilience",
          front: "What is Ecological Resilience? Does it mean zero disturbance?",
          back: "NO, disturbance still happens! Resilience is the ability to ABSORB disturbance, recover, and preserve core functions, structure, and feedbacks.",
          hint: "Bouncing back, not immunity to change."
        },
        {
          id: 11,
          category: "Distinction Trap",
          front: "Why is Ecology not identical to Environmental Concern?",
          back: "Ecology is an objective natural science delivering empirical data; Environmental Concern is a human value-laden social or ethical response.",
          hint: "Science vs Ethics."
        },
        {
          id: 12,
          category: "Ethics & Justice",
          front: "What is 'Environmental Injustice'?",
          back: "When poor, vulnerable, or marginalized communities bear a disproportionate burden of environmental hazards, pollution, and climate damage.",
          hint: "Unequal distribution of ecological harms."
        },
        {
          id: 13,
          category: "Community Interactions",
          front: "Why is Predation classified as a Community Interaction?",
          back: "Because predation involves an interaction between populations of TWO DIFFERENT SPECIES (biotic to biotic), which defines a community.",
          hint: "Two species interacting."
        },
        {
          id: 14,
          category: "Climate Regulation",
          front: "How do forests regulate climate as an ecosystem service?",
          back: "By sequestering atmospheric carbon in biomass and soil, and moderating regional moisture, transpiration, and microclimate temperatures.",
          hint: "Carbon sink + evapotranspiration cooling."
        },
        {
          id: 15,
          category: "Functional Diversity",
          front: "What does 'Functional Diversity' capture in an ecosystem?",
          back: "The variety of ecological roles, biochemical processes, and functional traits organisms possess (e.g., pollinators, decomposers, nitrogen fixers).",
          hint: "What organisms DO, not just their names."
        },
        {
          id: 16,
          category: "Ecosystem Definition",
          front: "What transforms a biological Community into an Ecosystem?",
          back: "The addition and continuous interaction with the ABIOTIC environment (sunlight, soil, water, atmosphere, nutrient cycles).",
          hint: "Living community + physical chemical surroundings."
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
          explanation: "Ecology is the scientific discipline dedicated to examining how organisms interact with one another and with both the biotic (living) and abiotic (physical/chemical) components of their environment."
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
          explanation: "Genetic diversity explicitly refers to genetic variation within a single species or population. Different agricultural varieties of Oryza sativa (rice) demonstrate variation at the gene level within one species."
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
          explanation: "Distribution describes the geographic locations, ranges, or spatial areas across which an organism or species occurs in nature."
        },
        {
          id: 4,
          question: "Which sequence correctly represents increasing ecological organization?",
          options: [
            "Community → organism → ecosystem → population",
            "Organism → population → community → ecosystem",
            "Population → organism → biosphere → community",
            "Ecosystem → population → organism → community"
          ],
          correct: 1,
          letter: "B",
          explanation: "The standard ecological organizational hierarchy proceeds from the individual Organism → Population (same species) → Community (different species interacting) → Ecosystem (community + abiotic factors) → Biosphere."
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
          explanation: "Abiotic factors are non-living physical or chemical factors (e.g., temperature, water, light, rocks, soil minerals). Fungi, bacteria, and grasses are living (biotic) organisms."
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
          explanation: "A community interaction occurs between organisms of different co-occurring species. Predation (e.g. an owl preying on a field mouse) is a classic interspecific biological interaction."
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
          explanation: "A habitat is the specific physical and functional setting or environment that provides an organism with the requisite conditions (shelter, water, food, climate) to survive and reproduce."
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
          explanation: "Invisible biodiversity consists of components that escape casual human observation: genes, microbes, mycorrhizae, bacteria, soil microfauna, and microscopic ecological processes."
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
          explanation: "Species richness is strictly the total count of different distinct species inhabiting a given geographic area or community."
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
          explanation: "Species evenness quantifies the relative numerical abundance of individuals across all the coexisting species in a community."
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
          explanation: "Functional diversity accounts for the diversity of biological functions, functional traits, and ecological niches fulfilled by organisms in an ecosystem (e.g. primary producers, decomposers, seed dispersers)."
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
          explanation: "Ecosystem diversity refers to the presence of multiple different ecosystems, habitats, and ecological communities distributed across a landscape or region."
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
          explanation: "Ecosystem services are formally defined as the myriad beneficial goods and ecological processes that human societies derive from healthy, functional ecosystems."
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
          explanation: "Wetlands act as natural sponge buffers: they store surplus hydrological flows, naturally filter out sediments and toxins, recharge underground aquifers, and stabilize clean water availability."
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
          explanation: "Forest ecosystems sequester massive amounts of atmospheric carbon dioxide in woody biomass and forest soils, while transpiration regulates regional humidity and thermal microclimates."
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
          explanation: "The universally recognized triple bottom line / three pillars of sustainability are Environmental integrity, Social equity, and Economic viability."
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
          explanation: "According to the landmark 1987 Brundtland Commission, sustainable development is meeting the needs of the present without compromising the ability of future generations to meet their own needs."
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
          explanation: "Environmental injustice takes place when marginalized or underprivileged groups suffer disproportionate exposure to ecological degradations, polluting industries, toxics, and climate hazards."
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
          explanation: "Resilience is defined by an ecosystem's capacity to absorb disturbance, cope with environmental fluctuations, and reorganize while retaining essentially the same function, structure, and identity."
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
          explanation: "Ecology investigates the interactions between organisms and environments; biodiversity represents the varied richness of life forms; sustainability is about organizing human actions to allow life's systems to persist indefinitely."
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
          explanation: "Invisible biodiversity incorporates the microscopic, genetic, and below-ground life forms such as genes, beneficial microbes, fungi, soil detritivores, and ecological processes that drive ecosystem functioning unseen."
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
          explanation: "Distribution in ecology designates the spatial locations, geographical expanse, and mapped ranges where a particular species or population occurs."
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
          explanation: "Wetlands capture surface water runoff, slow flood velocity, absorb toxic pollutants through aquatic vegetation, and slowly replenish clean groundwater aquifers."
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
          explanation: "A habitat is not just a place on a map; it is a functionally suitable environmental setting providing the necessary resources, shelter, and conditions an organism requires to survive and reproduce."
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
          explanation: "Ecology is an objective natural science that generates testable hypotheses and empirical explanations. Environmental concern is a value-driven social, moral, or philosophical response regarding human impact on nature."
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
          explanation: "An ecological community is composed of interacting populations of different species. Predation involves individuals of one species killing and consuming individuals of another species."
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
          explanation: "The biosphere is the highest level of ecological organization: the global sum of all Earth's ecosystems and living systems where life can survive."
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
          explanation: "A community is strictly defined as an assemblage of populations of different species coexisting and interacting with each other within a designated spatial boundary."
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
          explanation: "Ecosystem services are the direct and indirect benefits, goods, and ecological conditions that human societies obtain from naturally functioning ecosystems."
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
          explanation: "Organismal ecology investigates how an individual organism's morphological, physiological, and behavioral adaptations enable it to meet environmental challenges."
        }
      ]
    },

    // Placeholders for subsequent weeks (2-12) to demonstrate scalability:
    2: {
      weekNumber: 2,
      title: "Functional Diversity, Trade-Offs & Natural Capital",
      subtitle: "Exam Revision Notes, 16 Key Concepts, 20 Practice MCQs & Assignment 2 Solutions",
      status: "available",
      badge: "Week 2 Ready",
      summary: "Comprehensive study of functional diversity (distinct ecological roles), evaluating unavoidable sustainability trade-offs between coexisting benefits and harms, recognizing wetlands as irreplaceable natural infrastructure, decoding how industrialization obscured direct ecological feedback, respecting non-linear ecological thresholds, and incorporating natural capital accounting into economic planning.",

      hierarchy: [
        {
          level: 1,
          name: "Functional Diversity",
          def: "The variety of species performing distinct ecological roles, traits, and biochemical tasks in an ecosystem.",
          icon: "🧬",
          example: "Pollinators, decomposers, nitrogen fixers, and top predators working in concert"
        },
        {
          level: 2,
          name: "Regulating Services & Natural Infrastructure",
          def: "Ecosystem processes that reduce risks, moderate hazards, and stabilise physical conditions.",
          icon: "🌊",
          example: "Wetlands acting as natural infrastructure by storing floodwaters, slowing flows, and biofiltering toxics"
        },
        {
          level: 3,
          name: "Ecological Thresholds",
          def: "Critical boundary limits beyond which ecological change becomes abrupt, unsafe, or difficult to reverse.",
          icon: "⚠️",
          example: "Lake eutrophication or coral reef bleaching tipping points"
        },
        {
          level: 4,
          name: "Ecological Feedback & Industrial Disconnect",
          def: "Direct environmental feedback in traditional societies versus industrial systems where distance, scale, and speed hide damage.",
          icon: "🏭",
          example: "Urban consumers separated by thousands of miles from the deforestation creating their goods"
        },
        {
          level: 5,
          name: "Natural Capital Accounting",
          def: "Recognizing that nature's assets (forests, soils, water systems, wetlands) have real economic and ecological value beyond market prices.",
          icon: "💎",
          example: "Valuing clean watershed filtration instead of only logging revenue"
        }
      ],

      pillars: [
        {
          id: "environmental",
          title: "Environmental Sustainability",
          icon: "🌿",
          color: "#10b981",
          desc: "Protecting ecological processes, biodiversity, natural resources, and systemic resilience from crossing irreversible tipping points."
        },
        {
          id: "social",
          title: "Social Sustainability & Feedback",
          icon: "👥",
          color: "#3b82f6",
          desc: "Developing meaningful sustainability indicators that represent important realities, foster public understanding, and support action."
        },
        {
          id: "economic",
          title: "Economic Natural Capital",
          icon: "📊",
          color: "#f59e0b",
          desc: "Natural capital accounting that makes nature's assets visible in decision-making, acknowledging market prices fail to capture total value."
        }
      ],

      services: [
        {
          name: "Wetlands as Natural Infrastructure",
          benefit: "Water Filtration, Flow Moderation & Habitat",
          icon: "💧",
          desc: "Wetlands store water, slow runoff flows, filter out contaminants, recharge groundwater aquifers, and provide vital biodiversity habitat."
        },
        {
          name: "Regulating Ecosystem Services",
          benefit: "Risk Reduction & Hazard Mitigation",
          icon: "🛡️",
          desc: "Ecosystem processes that stabilize climate, moderate extreme weather events, regulate water cycles, and reduce epidemic risks."
        },
        {
          name: "Direct Ecological Feedback",
          benefit: "Early Warning & Environmental Limits",
          icon: "🔄",
          desc: "Direct observational signals from changing soils, streams, and seasonal cycles that helped historical societies respect natural carrying capacities."
        },
        {
          name: "Natural Capital Assets",
          benefit: "Long-term Wealth of Nations",
          icon: "🌲",
          desc: "Stocks of forests, fertile soils, water basins, and species diversity that generate sustainable flows of vital services for humanity."
        }
      ],

      traps: [
        {
          concept: "The 'Win-Win' Assumption Trap",
          trap: "Assuming every sustainability intervention produces only positive outcomes without any sacrifice.",
          rule: "A trade-off occurs when real benefits and real harms occur together. Genuine sustainability analysis assesses competing outcomes rather than assuming an easy win-win."
        },
        {
          concept: "The Wetland Replacement Fallacy",
          trap: "Believing that artificial concrete drainage systems can fully replace natural wetlands.",
          rule: "Wetland services CANNOT always be fully replaced by engineered drainage systems. Wetlands provide simultaneous flow buffering, biofiltration, carbon storage, and living habitat."
        },
        {
          concept: "The Market Price Illusion",
          trap: "Assuming that market prices accurately reflect the true value of ecological systems.",
          rule: "Market prices frequently fail to capture the full value of ecological functions. Clean air, water filtration, and pollination have enormous value even if they have zero market price tag."
        },
        {
          concept: "The Industrial Distance Shield",
          trap: "Assuming modern consumers easily see the ecological impact of their purchases.",
          rule: "Industrialization increased speed, scale, and geographic distance of production, effectively separating consumers from resources and making environmental damage easier to hide."
        },
        {
          concept: "Indicator Decontextualization",
          trap: "Believing a single number or composite indicator provides complete certainty without context.",
          rule: "Indicators must always be interpreted in context: the exact same numerical score can signify completely different realities and require different actions in different settings."
        },
        {
          concept: "Ecological Thresholds vs Linear Change",
          trap: "Assuming ecological degradation is always gradual and easily reversible.",
          rule: "An ecological threshold is a critical limit beyond which ecological change may become abrupt, unsafe, or practically impossible to reverse."
        }
      ],

      definitions: [
        {
          term: "Functional Diversity",
          category: "Biodiversity",
          definition: "The variety of species performing different ecological roles, biochemical processes, and functional traits within an ecosystem."
        },
        {
          term: "Sustainability Trade-off",
          category: "Sustainability",
          definition: "A decision situation where real benefits and real harms occur together, requiring rigorous evaluation of competing outcomes rather than assuming win-win solutions."
        },
        {
          term: "Regulating Services",
          category: "Ecosystem Services",
          definition: "Ecosystem services that reduce risks, moderate natural hazards, and stabilise environmental conditions through natural ecological processes."
        },
        {
          term: "Environmental Sustainability",
          category: "Sustainability",
          definition: "The ongoing protection and stewardship of ecological processes, biodiversity, natural resource stocks, and systemic resilience over time."
        },
        {
          term: "Wetlands as Natural Infrastructure",
          category: "Ecosystem Services",
          definition: "Natural wetland systems that perform essential infrastructure services: storing excess floodwater, slowing hydrological velocity, filtering contaminants, and supporting wildlife habitat."
        },
        {
          term: "Ecological Feedback",
          category: "Ecology",
          definition: "Direct information, observations, or consequences from changes in land, water, seasons, and resource availability that help societies perceive and respect environmental limits."
        },
        {
          term: "Sustainability Indicator",
          category: "Sustainability",
          definition: "A quantitative or qualitative measure that represents important real-world conditions, is readily understandable, and directly supports evidence-based action."
        },
        {
          term: "Composite Indicator",
          category: "Sustainability",
          definition: "A single aggregate metric formulated by mathematically combining multiple individual indicators into one score (can simplify reporting, but risks obscuring crucial local context)."
        },
        {
          term: "Industrialization Impact",
          category: "Ecology",
          definition: "The historical shift that exponentially increased the speed, scale, and geographical distance of production and consumption, making some environmental damage easier to hide from consumers."
        },
        {
          term: "Ecological Threshold",
          category: "Ecology",
          definition: "A critical tipping point or boundary beyond which ecological change may accelerate abruptly, become unsafe, or become practically impossible to reverse."
        },
        {
          term: "Natural Capital",
          category: "Sustainability",
          definition: "Earth's collective assets—including forests, soils, freshwater systems, wetlands, clean air, and biodiversity—which hold intrinsic and indispensable real economic value."
        },
        {
          term: "Natural Capital Accounting",
          category: "Sustainability",
          definition: "An environmental-economic accounting approach that makes the value, depreciation, and service flows of natural assets visible in financial accounts, policy, and decision-making."
        },
        {
          term: "Ecosystem Services",
          category: "Ecosystem Services",
          definition: "The multitude of benefits people obtain from ecosystems, systematically categorized into provisioning, regulating, cultural, and supporting functions."
        },
        {
          term: "Ecological Resilience",
          category: "Ecology",
          definition: "The capacity of an ecological system to absorb shocks, withstand disturbance, and maintain or recover critical structures, feedbacks, and functions."
        },
        {
          term: "Biodiversity",
          category: "Biodiversity",
          definition: "The full variety of life on Earth across all organizational levels, encompassing genetic diversity, species diversity, and ecosystem diversity."
        },
        {
          term: "Sustainability",
          category: "Sustainability",
          definition: "Prioritizing and maintaining long-term environmental, social, and economic well-being across generations, rather than extracting only short-term economic gains."
        }
      ],

      flashcards: [
        {
          id: 201,
          category: "Core Definition",
          front: "What does 'Functional Diversity' refer to?",
          back: "Different species performing different ecological roles and biological traits in an ecosystem (e.g., pollinators, decomposers, apex predators).",
          hint: "Focus on what species DO, not just market prices or headcount."
        },
        {
          id: 202,
          category: "Sustainability Decision",
          front: "What is a 'Trade-Off' in sustainability analysis?",
          back: "A decision situation where real benefits and real harms occur together, requiring deliberate evaluation of competing outcomes rather than assuming an easy win-win.",
          hint: "Benefits and costs coexist."
        },
        {
          id: 203,
          category: "Ecosystem Services",
          front: "What is the primary role of 'Regulating Services'?",
          back: "Reducing risks and stabilising environmental conditions through natural ecological processes (e.g., flood control, water purification, climate regulation).",
          hint: "Stabilizing and protecting."
        },
        {
          id: 204,
          category: "Environmental Sustainability",
          front: "What does Environmental Sustainability primarily involve?",
          back: "Protecting ecological processes, biodiversity, natural resources, and system resilience over time.",
          hint: "Processes, biodiversity, resources, and resilience."
        },
        {
          id: 205,
          category: "Natural Infrastructure",
          front: "Why are Wetlands understood as 'Natural Infrastructure'?",
          back: "They store water, slow down runoff flows, filter toxic contaminants, and support critical biodiversity habitat naturally.",
          hint: "Think: nature's water treatment plant and storm buffer."
        },
        {
          id: 206,
          category: "Exam Trap Alert",
          front: "Can wetland services always be fully replaced by engineered drainage systems?",
          back: "NO! The official NPTEL answer explicitly rejects this assumption. Engineered pipes cannot replicate the multi-benefit biofiltration, habitat, and hydrological recharge of wetlands.",
          hint: "Never assume complete replacement."
        },
        {
          id: 207,
          category: "Ecological Feedback",
          front: "What helped early human societies understand environmental limits?",
          back: "Direct ecological feedback from land, water, seasons, and local resource use.",
          hint: "Direct, immediate observational feedback."
        },
        {
          id: 208,
          category: "Sustainability Indicators",
          front: "What three essential qualities define a good sustainability indicator?",
          back: "1. Represents important realities\n2. Is understandable\n3. Supports action",
          hint: "Meaningful, clear, and actionable."
        },
        {
          id: 209,
          category: "Industrialization",
          front: "What made industrialization fundamentally different from earlier development?",
          back: "It exponentially increased speed, scale, and geographic distance of production and consumption, making ecological damage easier to hide.",
          hint: "Speed, scale, and distance."
        },
        {
          id: 210,
          category: "Ecological Thresholds",
          front: "What is an 'Ecological Threshold'?",
          back: "A critical limit or tipping point beyond which ecological change may become unsafe, abrupt, or practically impossible to reverse.",
          hint: "Points of no return or unsafe shifts."
        },
        {
          id: 211,
          category: "Natural Capital",
          front: "What assets are included in 'Natural Capital'?",
          back: "Nature's living and physical assets: forests, soils, freshwater systems, wetlands, clean atmosphere, and biodiversity.",
          hint: "Nature's balance sheet."
        },
        {
          id: 212,
          category: "Natural Capital Accounting",
          front: "What is the purpose of Natural Capital Accounting?",
          back: "To make the real value of natural assets and ecological functions visible in economic accounts, public balance sheets, and policy decisions.",
          hint: "Putting nature on the balance sheet."
        },
        {
          id: 213,
          category: "Economic Fallacy",
          front: "Why does Market Price fail as an indicator of ecosystem value?",
          back: "Market prices frequently fail to capture the full value of vital ecological functions (e.g. pollination, groundwater recharge, clean air have no market sticker price).",
          hint: "Price does not equal value."
        },
        {
          id: 214,
          category: "Trade-off Example",
          front: "Give a concrete example of a sustainability trade-off.",
          back: "An industrial/highway project that creates economic revenue and jobs, but destroys a vital natural wetland and degrades downstream water security.",
          hint: "Economic gain paired with ecological loss."
        },
        {
          id: 215,
          category: "Indicators & Context",
          front: "Why must sustainability indicators always be interpreted in context?",
          back: "Because the exact same numerical score can mean completely different things in different geographic or social settings.",
          hint: "A number without context is meaningless."
        },
        {
          id: 216,
          category: "Composite Indicators",
          front: "What is a 'Composite Indicator' and what is its main drawback?",
          back: "A single score made by combining multiple indicators. Drawback: it can mask or obscure critical local context and trade-offs behind a single averaged number.",
          hint: "Aggregated score vs hidden realities."
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
          explanation: "Functional diversity focuses on ecological roles, biological traits, and ecosystem tasks performed by different species, rather than prices or human population figures."
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
          explanation: "Trade-offs involve competing outcomes where real benefits (e.g. food production, infrastructure) and real harms (e.g. habitat destruction, emissions) coexist and must be evaluated together."
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
          explanation: "Regulating services reduce risks and stabilize environmental conditions. Timber and minerals are provisioning goods, while wetland filtration regulates water purity and flood risk."
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
          explanation: "Environmental sustainability centers on maintaining ecological processes, safeguarding biological diversity, conserving natural resources, and sustaining system resilience."
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
          explanation: "Wetlands perform multiple critical infrastructure functions: they store surplus water, slow rapid flood runoff, biologically filter contaminants, and provide essential wildlife habitat."
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
          explanation: "Direct ecological feedback from changing crop yields, water availability, seasonal shifts, and resource scarcity made environmental boundaries directly observable to early communities."
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
          explanation: "Useful indicators are meaningful and actionable: they capture critical real-world realities, can be understood by stakeholders, and support sound decision-making."
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
          explanation: "Industrialization greatly expanded the speed, scale, and geographic distance of supply chains, creating an ecological disconnect where consumers rarely witness the distant extraction or damage."
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
          explanation: "An ecological threshold represents a critical tipping point in an ecosystem beyond which further change can trigger abrupt, dangerous, or irreversible system degradation."
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
          explanation: "Natural capital encompasses all of Earth's natural stocks and assets—including forests, fertile soils, water basins, wetlands, and biodiversity—whether or not markets price them."
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
          explanation: "Natural capital accounting integrates the depreciation and value of ecosystem assets into national and corporate accounts so decision-makers can protect foundational wealth."
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
          explanation: "Markets routinely fail to place monetary prices on essential public ecosystem functions (such as climate regulation, groundwater recharge, and oxygen production)."
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
          explanation: "Crossing thresholds can push ecosystems into alternative stable states (e.g. desertification, lake dead zones) that are exceedingly difficult, expensive, or impossible to reverse."
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
          explanation: "A classic sustainability trade-off emerges when an infrastructure or development initiative delivers economic benefits while simultaneously degrading a natural ecosystem."
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
          explanation: "A composite indicator mathematically aggregates multiple individual metrics into a single index (such as the Human Development Index), which provides high-level overviews but may hide trade-offs."
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
          explanation: "Context is vital because identical quantitative values can signify vastly different ecological health or social vulnerability across different geographies and cultural baselines."
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
          explanation: "Environmental sustainability involves actively safeguarding biodiversity and core ecological processes while managing natural resource harvesting responsibly within planetary limits."
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
          explanation: "Assuming that artificial drainage systems can always replace wetland functions is false. Engineered channels cannot replicate the biological purification and habitat complexity of wetlands."
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
          explanation: "In modern globalized industrial networks, production occurs far away from consumption centers, geographically separating consumers from the immediate consequences of extraction."
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
          explanation: "True sustainability requires recognizing that natural capital assets possess profound intrinsic, ecological, and economic value that must guide policy and planning decisions."
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
          explanation: "Functional diversity is defined as the variety of distinct ecological roles, traits, and functions carried out by different species in an ecosystem."
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
          explanation: "A sustainability trade-off describes circumstances where genuine benefits and real harms co-occur, demanding careful evaluation of competing trade-offs rather than simplistic win-win assumptions."
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
          explanation: "Regulating services act to reduce natural risks and stabilise environmental conditions via ecological processes (such as storm buffering, water filtration, and temperature moderation)."
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
          explanation: "Environmental sustainability primarily focuses on the proactive protection of ecological processes, biodiversity, natural resource stocks, and systemic resilience."
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
          explanation: "Wetlands serve as vital natural infrastructure because they naturally store floodwaters, slow velocity, biofilter pollutants, and sustain critical ecological habitats."
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
          explanation: "Early societies relied on direct ecological feedback—observing firsthand the constraints of local soil fertility, seasonal weather patterns, and freshwater supply."
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
          explanation: "An effective sustainability indicator must faithfully reflect important real-world conditions, remain transparent and understandable, and directly empower decision-makers to take action."
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
          explanation: "Industrialization fundamentally altered human development by massively magnifying speed, scale, and geographic distance—thereby severing consumers from direct resource feedback and obscuring environmental harms."
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
          explanation: "An ecological threshold denotes a critical limit or boundary beyond which ecological alterations can trigger unsafe, non-linear, and irreversible damage."
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
          explanation: "Natural capital accounting underscores that natural assets—including forests, soils, water basins, wetlands, and biodiversity—possess profound, tangible value that must be included in decision-making."
        }
      ]
    },
    3: {
      weekNumber: 3,
      title: "Ecosystem Goods, Services & Valuation",
      subtitle: "Upcoming Lectures & Assignment 3",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 3 will be populated upon receipt of lecture content."
    },
    4: {
      weekNumber: 4,
      title: "Threats to Biodiversity: Habitat Loss & Invasions",
      subtitle: "Upcoming Lectures & Assignment 4",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 4 will be populated upon receipt of lecture content."
    },
    5: {
      weekNumber: 5,
      title: "Climate Change & Ecological Resilience",
      subtitle: "Upcoming Lectures & Assignment 5",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 5 will be populated upon receipt of lecture content."
    },
    6: {
      weekNumber: 6,
      title: "Conservation Biology & Protected Areas",
      subtitle: "Upcoming Lectures & Assignment 6",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 6 will be populated upon receipt of lecture content."
    },
    7: {
      weekNumber: 7,
      title: "Sustainable Agriculture & Forest Management",
      subtitle: "Upcoming Lectures & Assignment 7",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 7 will be populated upon receipt of lecture content."
    },
    8: {
      weekNumber: 8,
      title: "Urban Ecology & Green Infrastructure",
      subtitle: "Upcoming Lectures & Assignment 8",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 8 will be populated upon receipt of lecture content."
    },
    9: {
      weekNumber: 9,
      title: "Circular Economy & Resource Sustainability",
      subtitle: "Upcoming Lectures & Assignment 9",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 9 will be populated upon receipt of lecture content."
    },
    10: {
      weekNumber: 10,
      title: "Environmental Policy, Law & Global Treaties",
      subtitle: "Upcoming Lectures & Assignment 10",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 10 will be populated upon receipt of lecture content."
    },
    11: {
      weekNumber: 11,
      title: "Community-Based Conservation & Indigenous Knowledge",
      subtitle: "Upcoming Lectures & Assignment 11",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 11 will be populated upon receipt of lecture content."
    },
    12: {
      weekNumber: 12,
      title: "Comprehensive Final Exam Prep & Grand Mock Tests",
      subtitle: "Final Revision, Mock Exams & Complete Syllabus Wrap",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Final exam revision tests and comprehensive multi-week review drills."
    }
  }
};

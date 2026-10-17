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
      title: "Biodiversity Patterns & Ecosystem Functions",
      subtitle: "Upcoming Lectures & Assignment 2",
      status: "upcoming",
      badge: "Coming Soon",
      summary: "Material for Week 2 will be added as soon as lecture notes and assignments are provided."
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

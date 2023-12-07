import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeImg.module.css";

export const HomeImg = () => {
    const navigate = useNavigate();

    const onMenuTextContainer2Click = useCallback(() => {
        navigate("/marketplace");
    }, [navigate]);

    const onComponent1Container3Click = useCallback(() => {
        const anchor = document.querySelector("[data-scroll-to='groupContainer1']");
        if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    }, []);
    return (
        <div className={styles.homepageImgDiv}>
            <img className={styles.nftIcon} alt="" src="/assets/imgs/nft1.svg" />
            <div className={styles.groupDiv}>
                <img className={styles.image22Icon} alt="" src="/assets/imgs/image-22@2x.png" />
                <img className={styles.image26Icon} alt="" src="/assets/imgs/image-26@2x.png" />
                <div className={styles.rectangleDiv} />
            </div>
            <img className={styles.icon} alt="" src="/assets/imgs/2@2x.png" />
            <img className={styles.vectorIcon} alt="" src="/assets/imgs/vector-155.svg" />
            <img
                className={styles.vector5Stroke}
                alt=""
                src="/assets/imgs/vector-5-stroke22.svg"
            />
            <div className={styles.frameDiv}>
                <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/assets/imgs/mask-group@2x.png"
                />
                <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/assets/imgs/mask-group@2x.png"
                />
            </div>
            <img className={styles.image56Icon} alt="" src="/assets/imgs/image-56@2x.png" />
            <img className={styles.image55Icon} alt="" src="/assets/imgs/image-55@2x.png" />
            <img className={styles.image27Icon} alt="" src="/assets/imgs/image-27@2x.png" />
            <div className={styles.groupDiv1}>
                <img className={styles.image50Icon} alt="" src="/assets/imgs/image-503@2x.png" />
                <img className={styles.image53Icon} alt="" src="/assets/imgs/image-56@2x.png" />
                <img className={styles.image54Icon} alt="" src="/assets/imgs/image-545@2x.png" />
            </div>
            <img className={styles.image54Icon1} alt="" src="/assets/imgs/image-55@2x.png" />
            <img className={styles.image53Icon1} alt="" src="/assets/imgs/image-56@2x.png" />
            <img className={styles.groupIcon} alt="" src="/assets/imgs/group-13021@2x.png" />
            <img className={styles.groupIcon1} alt="" src="/assets/imgs/group-13011@2x.png" />
            <img
                className={styles.maskGroupIcon2}
                alt=""
                src="/assets/imgs/mask-group6@2x.png"
            />
            <img
                className={styles.maskGroupIcon3}
                alt=""
                src="/assets/imgs/mask-group7@2x.png"
            />
            <img
                className={styles.maskGroupIcon4}
                alt=""
                src="/assets/imgs/mask-group8@2x.png"
            />
            <img
                className={styles.maskGroupIcon5}
                alt=""
                src="/assets/imgs/mask-group9@2x.png"
            />
            <img className={styles.asset14x1} alt="" src="/assets/imgs/asset-14x-1@2x.png" />
            <div className={styles.frameDiv1}>
                <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/assets/imgs/mask-group@2x.png"
                />
                <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/assets/imgs/mask-group@2x.png"
                />
            </div>
            <img className={styles.groupIcon2} alt="" src="/assets/imgs/group-30@2x.png" />
            <img className={styles.groupIcon3} alt="" src="/assets/imgs/group-251.svg" />
            <img className={styles.groupIcon4} alt="" src="/assets/imgs/group-27.svg" />
            <img className={styles.rectangleIcon} alt="" src="/assets/imgs/rectangle-20.svg" />
            <img className={styles.pngegg2Icon} alt="" src="/assets/imgs/pngegg-2@2x.png" />
            <img className={styles.pngegg11} alt="" src="/assets/imgs/pngegg-1-1@2x.png" />
            <img className={styles.rectangleIcon1} alt="" src="/assets/imgs/rectangle-92.svg" />
            <div className={styles.groupDiv2}>
                <img className={styles.pngegg1Icon} alt="" src="/assets/imgs/pngegg-1@2x.png" />
                <img className={styles.vectorIcon1} alt="" src="/assets/imgs/vector-6.svg" />
            </div>
            <div className={styles.groupDiv3}>
                <img
                    className={styles.untitled31Icon}
                    alt=""
                    src="/assets/imgs/untitled3-1@2x.png"
                />
                <img className={styles.vectorIcon2} alt="" src="/assets/imgs/vector-61.svg" />
            </div>
            <img className={styles.groupIcon5} alt="" src="/assets/imgs/group-1.svg" />
            <div className={styles.rectangleDiv1} />
            <div className={styles.buildYourOwnEmpireInTheM}>
                Build your own empire in the metaverse
            </div>
            <div
                className={styles.playConquerInTheFirstTr}
            >{`Play & Conquer in the First True MMO Real Time Strategy Game on Blockchain`}</div>
            <div className={styles.experienceBlockchainGamingA}>
                Experience blockchain gaming at its best! Challenge the world in
                multiplayer PvP style with a custom army of your favourite units, a rich
                and immersive gameplay!
            </div>
            <div className={styles.nFTGAMEPlayConquerEarn}>
                NFT GAME. Play. Conquer. Earn
            </div>
            <div className={styles.groupDiv4}>
                <img
                    className={styles.vector5Stroke1}
                    alt=""
                    src="/assets/imgs/vector-5-stroke23.svg"
                />
                <img
                    className={styles.vector5Stroke2}
                    alt=""
                    src="/assets/imgs/vector-5-stroke24.svg"
                />
                <div className={styles.oVERVIEWDiv}>OVERVIEW</div>
            </div>
            <div className={styles.groupDiv5}>
                <img
                    className={styles.vector5Stroke3}
                    alt=""
                    src="/assets/imgs/vector-5-stroke25.svg"
                />
                <img
                    className={styles.vector5Stroke4}
                    alt=""
                    src="/assets/imgs/vector-5-stroke26.svg"
                />
                <div className={styles.kEYFEATURESDiv}>KEY FEATURES</div>
            </div>
            <div className={styles.groupDiv6}>
                <img
                    className={styles.vector5Stroke5}
                    alt=""
                    src="/assets/imgs/vector-5-stroke27.svg"
                />
                <img
                    className={styles.vector5Stroke6}
                    alt=""
                    src="/assets/imgs/vector-5-stroke28.svg"
                />
                <div className={styles.bUILDTHEULTIMATEKINGDOM}>
                    BUILD THE ULTIMATE KINGDOM
                </div>
            </div>
            <div className={styles.groupDiv7}>
                <img
                    className={styles.vector5Stroke7}
                    alt=""
                    src="/assets/imgs/vector-5-stroke29.svg"
                />
                <img
                    className={styles.vector5Stroke8}
                    alt=""
                    src="/assets/imgs/vector-5-stroke30.svg"
                />
                <div className={styles.rOADMAPDiv}>ROADMAP</div>
            </div>
            <div className={styles.groupDiv8}>
                <img
                    className={styles.vector5Stroke9}
                    alt=""
                    src="/assets/imgs/vector-5-stroke31.svg"
                />
                <img
                    className={styles.vector5Stroke10}
                    alt=""
                    src="/assets/imgs/vector-5-stroke32.svg"
                />
                <div
                    className={styles.pARTNERSSUPPORTERS}
                >{`PARTNERS & SUPPORTERS`}</div>
            </div>
            <div className={styles.groupDiv9}>
                <img
                    className={styles.vector5Stroke11}
                    alt=""
                    src="/assets/imgs/vector-5-stroke33.svg"
                />
                <img
                    className={styles.vector5Stroke12}
                    alt=""
                    src="/assets/imgs/vector-5-stroke34.svg"
                />
                <div className={styles.nFTMARKETPLACEDiv}>NFT MARKETPLACE</div>
            </div>
            <div className={styles.groupDiv10} data-scroll-to="groupContainer1">
                <img
                    className={styles.vector5Stroke13}
                    alt=""
                    src="/assets/imgs/vector-5-stroke35.svg"
                />
                <img
                    className={styles.vector5Stroke14}
                    alt=""
                    src="/assets/imgs/vector-5-stroke36.svg"
                />
                <div className={styles.oURWARRIORSDiv}>OUR WARRIORS</div>
            </div>
            <div className={styles.turnYourGamingPassionInto}>
                Turn your gaming passion into income
            </div>
            <div className={styles.beTheFirstToKnow}>Be the first to know</div>
            <div className={styles.groupDiv11}>
                <img className={styles.bimouseIcon} alt="" src="/assets/imgs/bimouse.svg" />
                <div className={styles.rectangleDiv2} />
                <div className={styles.rectangleDiv3} />
            </div>
            <img className={styles.groupIcon6} alt="" src="/assets/imgs/group-1321.svg" />
            <div className={styles.frameDiv2}>
                <div className={styles.consoleQualityGraphicsDiv}>
                    Console-Quality Graphics
                </div>
                <div className={styles.planStrategizeAndFightEne}>
                    Plan, strategize and fight enemies in a stunning 3D fantasy world.
                </div>
            </div>
            <div className={styles.frameDiv3}>
                <div className={styles.consoleQualityGraphicsDiv}>
                    Dominate with Strategy
                </div>
                <div className={styles.planStrategizeAndFightEne}>
                    Train your troops, equip them with powerful artillery and lead them
                    into epic PvP battles.
                </div>
            </div>
            <div className={styles.frameDiv4}>
                <div className={styles.sep2021Div}>Sep, 2021</div>
                <div className={styles.ideaAssessmentAndProjectFe}>
                    <ul className={styles.ideaAssessmentAndProjectFe1}>
                        <li className={styles.ideaAssessmentAnd}>
                            Idea assessment and project feasibility
                        </li>
                        <li className={styles.ideaAssessmentAnd}>
                            Research, gathering resources and team building
                        </li>
                        <li>Project planning, SWOT analysis and scope's layout</li>
                    </ul>
                </div>
            </div>
            <div className={styles.frameDiv5}>
                <div className={styles.sep2021Div}>Oct - Nov, 2021</div>
                <div className={styles.ideaAssessmentAndProjectFe}>
                    <ul className={styles.ideaAssessmentAndProjectFe1}>
                        <li className={styles.ideaAssessmentAnd}>
                            Game design document and game's architecture
                        </li>
                        <li className={styles.ideaAssessmentAnd}>
                            3D models, assets and graphics
                        </li>
                        <li>Begin game development and early prototypes</li>
                    </ul>
                </div>
            </div>
            <div className={styles.frameDiv6}>
                <div className={styles.sep2021Div}>Dec, 2021</div>
                <div className={styles.ideaAssessmentAndProjectFe}>
                    <ul className={styles.ideaAssessmentAndProjectFe1}>
                        <li
                            className={styles.ideaAssessmentAnd}
                        >{`Website design & development`}</li>
                        <li className={styles.ideaAssessmentAnd}>
                            Marketplace design and building NFT assets
                        </li>
                        <li className={styles.ideaAssessmentAnd}>
                            Whitepaper, pitch deck,
                        </li>
                        <li>early trailer video</li>
                    </ul>
                </div>
            </div>
            <div className={styles.frameDiv7}>
                <div className={styles.sep2021Div}>Q2, 2022</div>
                <div className={styles.ideaAssessmentAndProjectFe}>
                    <ul className={styles.ideaAssessmentAndProjectFe1}>
                        <li className={styles.ideaAssessmentAnd}>NFT Marketplace launch</li>
                        <li
                            className={styles.ideaAssessmentAnd}
                        >{`Continuous game development & release of updates for community`}</li>
                        <li>Launch of secondary NFT marketplace</li>
                    </ul>
                </div>
            </div>
            <div className={styles.frameDiv8}>
                <div className={styles.sep2021Div}>Q1, 2022</div>
                <div className={styles.ideaAssessmentAndProjectFe}>
                    <ul className={styles.ideaAssessmentAndProjectFe1}>
                        <li className={styles.ideaAssessmentAnd}>
                            Website launch and social media accounts
                        </li>
                        <li className={styles.ideaAssessmentAnd}>
                            Smart contracts audit and community building
                        </li>
                        <li>{`Seed, private & public rounds. Partnerships`}</li>
                    </ul>
                </div>
            </div>
            <div className={styles.frameDiv9}>
                <div className={styles.sep2021Div}>Q3, 2022</div>
                <div className={styles.ideaAssessmentAndProjectFe}>
                    <ul className={styles.ideaAssessmentAndProjectFe1}>
                        <li className={styles.ideaAssessmentAnd}>Alpha game release</li>
                        <li
                            className={styles.ideaAssessmentAnd}
                        >{`Release of help & support articles for players`}</li>
                        <li>Staking rewards</li>
                    </ul>
                </div>
            </div>
            <div className={styles.frameDiv10}>
                <div className={styles.consoleQualityGraphicsDiv}>
                    Real-Time Battle Control
                </div>
                <div className={styles.planStrategizeAndFightEne}>
                    Go to war with thousands of troops, all under your direct control.
                </div>
            </div>
            <div className={styles.frameDiv11}>
                <div
                    className={styles.consoleQualityGraphicsDiv}
                >{`Nonstop Events & Campaigns`}</div>
                <div className={styles.dailyQuestsLeaderboardChal}>
                    Daily quests, leaderboard challenges, unique campaigns, and alliance
                    events
                </div>
            </div>
            <div className={styles.cTADiv}>
                <img
                    className={styles.rectangleIcon2}
                    alt=""
                    src="/assets/imgs/rectangle-93.svg"
                />
                <div
                    className={styles.cONNECTWALLETCONQUER}
                >{`CONNECT WALLET & CONQUER`}</div>
            </div>
            <img className={styles.groupIcon7} alt="" src="/assets/imgs/group-10.svg" />
            <img className={styles.groupIcon8} alt="" src="/assets/imgs/group-13.svg" />
            <img className={styles.groupIcon9} alt="" src="/assets/imgs/group-12.svg" />
            <img className={styles.groupIcon10} alt="" src="/assets/imgs/group-13.svg" />
            <img
                className={styles.component16Icon}
                alt=""
                src="/assets/imgs/component-16.svg"
            />
            <img className={styles.groupIcon11} alt="" src="/assets/imgs/group-13.svg" />
            <div className={styles.groupDiv12}>
                <img className={styles.image8Icon} alt="" src="/assets/imgs/image-8@2x.png" />
                <img className={styles.image9Icon} alt="" src="/assets/imgs/image-9@2x.png" />
                <img className={styles.image10Icon} alt="" src="/assets/imgs/image-10@2x.png" />
                <img className={styles.image11Icon} alt="" src="/assets/imgs/image-11@2x.png" />
                <img className={styles.image12Icon} alt="" src="/assets/imgs/image-12@2x.png" />
            </div>
            <div className={styles.groupDiv13}>
                <img className={styles.image13Icon} alt="" src="/assets/imgs/image-13@2x.png" />
                <img className={styles.image14Icon} alt="" src="/assets/imgs/image-14@2x.png" />
                <img className={styles.image16Icon} alt="" src="/assets/imgs/image-16@2x.png" />
                <img className={styles.image17Icon} alt="" src="/assets/imgs/image-17@2x.png" />
                <div className={styles.frameDiv12}>
                    <img className={styles.image15Icon} alt="" src="/assets/imgs/image-15@2x.png" />
                </div>
            </div>
            <img className={styles.groupIcon12} alt="" src="/assets/imgs/group-21@2x.png" />
            <img className={styles.rectangleIcon3} alt="" src="/assets/imgs/rectangle-18.svg" />
            <img className={styles.groupIcon13} alt="" src="/assets/imgs/group-1305.svg" />
            <img className={styles.recIcon} alt="" src="/assets/imgs/rec.svg" />
            <div className={styles.expandYourTerritory}>Expand your Territory</div>
            <div className={styles.sELLORGIVEONRENT}>SELL OR GIVE ON RENT</div>
            <div className={styles.notInTheMoodToFightGive}>
                <p className={styles.notInTheMoodToFight}>
                    <span className={styles.notInThe}>Not in the mood to fight?</span>
                </p>
                <p className={styles.giveYourUnusedLandToOther}>
                    Give your unused land to other players and earn rent as passive
                    income!
                </p>
            </div>
            <div className={styles.buttonDiv}>
                <img
                    className={styles.rectangleIcon4}
                    alt=""
                    src="/assets/imgs/rectangle-119.svg"
                />
                <div className={styles.vISITMARKETPLACEDiv}>VISIT MARKETPLACE</div>
            </div>
            <div className={styles.buttonDiv1}>
                <img
                    className={styles.rectangleIcon4}
                    alt=""
                    src="/assets/imgs/rectangle-1110.svg"
                />
                <div className={styles.vISITMARKETPLACEDiv1}>REGISTER INTEREST</div>
            </div>
            <div className={styles.groupDiv14}>
                <img
                    className={styles.rectangleIcon6}
                    alt=""
                    src="/assets/imgs/rectangle-1111.svg"
                />
                <img className={styles.image22Icon1} alt="" src="/assets/imgs/image-221@2x.png" />
                <div className={styles.frameDiv13}>
                    <div className={styles.sep2021Div}>Seedify</div>
                    <div className={styles.advisorDiv}>Advisor</div>
                </div>
            </div>
            <img className={styles.polygonIcon} alt="" src="/assets/imgs/polygon-1.svg" />
            <img className={styles.polygonIcon1} alt="" src="/assets/imgs/polygon-2.svg" />
            <img
                className={styles.vector5Stroke15}
                alt=""
                src="/assets/imgs/vector-5-stroke37.svg"
            />
            <img
                className={styles.vector5Stroke16}
                alt=""
                src="/assets/imgs/vector-5-stroke38.svg"
            />
            <img
                className={styles.vector5Stroke17}
                alt=""
                src="/assets/imgs/vector-5-stroke39.svg"
            />
            <div className={styles.playersSpendBillionsOfE}>
                Players spend billions of $$ each year on in‑game items which they don't
                truly own. We believe there is a better way. Players deserve to be able
                to own and trade their in-game assets for real money. League of Empires
                is a play-to-earn game where players can turn their passion into real
                income.
            </div>
            <div className={styles.besidesTheEarningPotential}>
                Besides the earning potential for the players, we have emphasized
                heavily on the quality of the game and the time spent. Afterall, players
                are the ones who run the ecosystem and they deserve better gaming
                experiences which most of the play-to-earn games lack. We are on a
                mission to change that and redefine the meanings of a blockchain game.
            </div>
            <div className={styles.joinUsOnOurSocialChannels}>
                Join us on our social channels and never miss an important update
            </div>
            <img
                className={styles.component13Icon}
                alt=""
                src="/assets/imgs/component-136.svg"
            />
            <img
                className={styles.component13Icon1}
                alt=""
                src="/assets/imgs/component-137.svg"
            />
            <img
                className={styles.component13Icon2}
                alt=""
                src="/assets/imgs/component-138.svg"
            />
            <div className={styles.groupDiv15}>
                <div className={styles.rectangleDiv4} />
                <div className={styles.enterYourEmail}>Enter your email</div>
                <div className={styles.cwDiv}>
                    <div className={styles.frameDiv14}>
                        <div className={styles.cONNECTWALLETDiv}>SubScribe</div>
                    </div>
                </div>
            </div>
            <div className={styles.subscribeToOurMailingList}>
                Subscribe to our mailing list
            </div>
            <img className={styles.image5Icon} alt="" src="/assets/imgs/image-5@2x.png" />
            <div className={styles.nFTSINTEGRATEDDiv}>NFTS INTEGRATED</div>
            <div className={styles.frameDiv15}>
                <div className={styles.frameDiv16}>
                    <div className={styles.buySellAndRentLandForPr}>
                        Buy, sell and rent land for profit
                    </div>
                    <div className={styles.buyLandUpgradeItExpandI}>
                        Buy land, upgrade it, expand it to an empire and sell or rent on the
                        marketplace.
                    </div>
                </div>
                <div className={styles.frameDiv16}>
                    <div className={styles.buySellAndRentLandForPr}>War Academies</div>
                    <div className={styles.buyLandUpgradeItExpandI}>
                        Gather enough resources and mint your own War Academies. Use them in
                        your game or sell them on the marketplace.
                    </div>
                </div>
                <div className={styles.frameDiv16}>
                    <div className={styles.buySellAndRentLandForPr}>
                        Artillery Workshops
                    </div>
                    <div className={styles.buyLandUpgradeItExpandI}>
                        Mint new artilleries. Use them in your gameplay or sell them on
                        marketplace.
                    </div>
                </div>
                <div className={styles.frameDiv16}>
                    <div className={styles.buySellAndRentLandForPr}>Own Leagues</div>
                    <div className={styles.buyLandUpgradeItExpandI}>
                        Be the owner of leagues on blockchain. Earn a guaranteed cut of
                        players' earnings.
                    </div>
                </div>
            </div>
            <div className={styles.buttonDiv2}>
                <img
                    className={styles.rectangleIcon4}
                    alt=""
                    src="/assets/imgs/rectangle-1112.svg"
                />
                <div className={styles.vISITMARKETPLACEDiv2}>Download</div>
            </div>
            <img className={styles.icon1} alt="" src="/assets/imgs/11-1@2x.png" />
            <div className={styles.frameDiv20}>
                <div className={styles.groupDiv16}>
                    <img className={styles.image1Icon} alt="" src="/assets/imgs/image-1@2x.png" />
                    <div className={styles.frameDiv21}>
                        <div className={styles.tokenomicsDiv}>{`Tokenomics `}</div>
                        <div className={styles.tokenomicsDiv}>White paper</div>
                        <div className={styles.tokenomicsDiv}>Disclaimer</div>
                        <div className={styles.blogDiv}>Blog</div>
                    </div>
                </div>
                <div className={styles.leagueOfEmpiresIsTheFirst}>
                    <p className={styles.leagueOfEmpires}>
                        League of Empires is the first ever true MMORTS game on blockchain.
                        It offers a rich and immersive gameplay. Train and command your
                        troops in stunning 3D wars! Form alliances, fortify your land,
                        deploy different strategies and increase your defences to protect
                        your treasures from enemies. Gather resources and train your army to
                        build up your power and expand it into a mighty Empire.
                    </p>
                    <p className={styles.leagueOfEmpires}></p>
                    <p
                        className={styles.leagueOfEmpires}
                    >{`Experience blockchain gaming at its best! Challenge the world in multiplayer PvP style with a custom army of your favourite units. Think & play as a general. Build artillery and tactically use it on battlefields or sell it on the marketplace. Battle through different conquests, enjoy an adrenaline-filled gameplay and earn $LOE tokens along the way!`}</p>
                </div>
                <div className={styles.frameDiv22}>
                    <img className={styles.vectorIcon3} alt="" src="/assets/imgs/vector.svg" />
                    <img className={styles.vectorIcon4} alt="" src="/assets/imgs/vector1.svg" />
                    <img className={styles.medium1Icon} alt="" src="/assets/imgs/medium-13.svg" />
                    <img className={styles.vectorIcon5} alt="" src="/assets/imgs/vector6.svg" />
                </div>
                <div className={styles.allRightReservedCopyrigh}>
                    All Right Reserved. © Copyright 2022
                </div>
                <div className={styles.rectangleDiv5} />
                <img className={styles.rec2Icon} alt="" src="/assets/imgs/rec2.svg" />
                <img className={styles.rec2Icon1} alt="" src="/assets/imgs/rec2.svg" />
                <img className={styles.rec2Icon2} alt="" src="/assets/imgs/rec2.svg" />
                <img className={styles.rec2Icon3} alt="" src="/assets/imgs/rec2.svg" />
            </div>
            <div className={styles.frameDiv23}>
                <div className={styles.frameDiv24}>
                    <div className={styles.frameDiv25}>
                        <div className={styles.component15Div}>
                            <img className={styles.rectangleIcon8} alt="" />
                            <div className={styles.highEntertainmentValue}>
                                High Entertainment Value
                            </div>
                            <img
                                className={styles.groupIcon14}
                                alt=""
                                src="/assets/imgs/group-1299.svg"
                            />
                            <div className={styles.frameDiv26}>
                                <div className={styles.leagueOfEmpiresOffers3DCo}>
                                    League of Empires offers 3D Console quality graphics,
                                    immersive game mechanics and a real time world building system
                                    and battles.
                                </div>
                            </div>
                        </div>
                        <div className={styles.component15Div}>
                            <img className={styles.rectangleIcon8} alt="" />
                            <div className={styles.highEntertainmentValue}>Play-to-Earn</div>
                            <img
                                className={styles.groupIcon14}
                                alt=""
                                src="/assets/imgs/group-1299.svg"
                            />
                            <div className={styles.frameDiv26}>
                                <div className={styles.leagueOfEmpiresOffers3DCo}>
                                    Engage in the most awe inspiring wars whether you play solo or
                                    with alliances or in leagues, and earn real cypto and NFTs.
                                </div>
                            </div>
                        </div>
                        <div className={styles.component15Div}>
                            <img className={styles.rectangleIcon8} alt="" />
                            <div
                                className={styles.highEntertainmentValue}
                            >{`Create & Sell NFTs`}</div>
                            <img
                                className={styles.groupIcon14}
                                alt=""
                                src="/assets/imgs/group-1299.svg"
                            />
                            <div className={styles.frameDiv26}>
                                <div className={styles.leagueOfEmpiresOffers3DCo}>
                                    Mint various types of NFTs like, Artilleries, Factories and
                                    Land. Use them in your gameplay or sell them on the
                                    Marketplace.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.frameDiv25}>
                        <div className={styles.component15Div}>
                            <img className={styles.rectangleIcon8} alt="" />
                            <div
                                className={styles.highEntertainmentValue}
                            >{`PvP Battle Modes & Leagues`}</div>
                            <img
                                className={styles.groupIcon14}
                                alt=""
                                src="/assets/imgs/group-1299.svg"
                            />
                            <div className={styles.frameDiv26}>
                                <div
                                    className={styles.leagueOfEmpiresOffers3DCo}
                                >{`Fight in PvP modes to secure the top ranks and climb up the leaderboards to reap higher rewards & earnings.`}</div>
                            </div>
                        </div>
                        <div className={styles.component15Div}>
                            <img className={styles.rectangleIcon8} alt="" />
                            <div
                                className={styles.highEntertainmentValue}
                            >{`Real Time Strategy & Control`}</div>
                            <img
                                className={styles.groupIcon14}
                                alt=""
                                src="/assets/imgs/group-1299.svg"
                            />
                            <div className={styles.frameDiv26}>
                                <div className={styles.leagueOfEmpiresOffers3DCo}>
                                    Design your unique formation, deploy real time strategy, take
                                    full control of your troops and guide them to victory.
                                </div>
                            </div>
                        </div>
                        <div className={styles.component15Div}>
                            <img className={styles.rectangleIcon8} alt="" />
                            <div className={styles.highEntertainmentValue}>
                                Form Alliances - Real Players
                            </div>
                            <img
                                className={styles.groupIcon14}
                                alt=""
                                src="/assets/imgs/group-1299.svg"
                            />
                            <div className={styles.frameDiv26}>
                                <div className={styles.leagueOfEmpiresOffers3DCo}>
                                    Chat with global players, make friends and form massive
                                    Alliances with players and win huge prizes together.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.keyFeatureDiv}>
                <div className={styles.groupDiv17}>
                    <img
                        className={styles.rectangleIcon14}
                        alt=""
                        src="/assets/imgs/rectangle-121.svg"
                    />
                    <div className={styles.frameDiv33}>
                        <div
                            className={styles.buySellRentLands}
                        >{`Buy, Sell & Rent Lands`}</div>
                    </div>
                    <div className={styles.frameDiv34}>
                        <div className={styles.everyPlayerWillNeedALand}>
                            Every player will need a land to start playing. Got an excess
                            land? Sell it or rent it on the Marketplace.
                        </div>
                    </div>
                    <div className={styles.nft1Div}>
                        <img
                            className={styles.groupIcon20}
                            alt=""
                            src="/assets/imgs/group-1335.svg"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.keyFeatureDiv1}>
                <div className={styles.groupDiv17}>
                    <img
                        className={styles.rectangleIcon14}
                        alt=""
                        src="/assets/imgs/rectangle-131.svg"
                    />
                    <div className={styles.frameDiv35}>
                        <div
                            className={styles.buySellRentLands}
                        >{`Build & Sell Artilleries`}</div>
                    </div>
                    <div className={styles.frameDiv34}>
                        <div className={styles.everyPlayerWillNeedALand}>
                            There are 10 different types of artilleries. Build your own, use
                            in battlefields or sell them on the Marketplace.
                        </div>
                    </div>
                    <div className={styles.crossbow1Div}>
                        <img
                            className={styles.groupIcon21}
                            alt=""
                            src="/assets/imgs/group-1336.svg"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.keyFeatureDiv2}>
                <div className={styles.groupDiv17}>
                    <img
                        className={styles.rectangleIcon14}
                        alt=""
                        src="/assets/imgs/rectangle-151.svg"
                    />
                    <div className={styles.frameDiv37}>
                        <div className={styles.buySellRentLands}>{`PvP & PvE Modes`}</div>
                    </div>
                    <div className={styles.frameDiv34}>
                        <div
                            className={styles.everyPlayerWillNeedALand}
                        >{`Test and train your skills in PvE modes. Once ready, shift to PvP modes & Leagues and earn even better rewards!`}</div>
                    </div>
                    <div className={styles.sword1Div}>
                        <img className={styles.groupIcon22} alt="" src="/assets/imgs/group1.svg" />
                    </div>
                </div>
            </div>
            <div className={styles.keyFeatureDiv3}>
                <div className={styles.groupDiv17}>
                    <img
                        className={styles.rectangleIcon14}
                        alt=""
                        src="/assets/imgs/rectangle-141.svg"
                    />
                    <div className={styles.frameDiv39}>
                        <div className={styles.buySellRentLands}>Form Alliances</div>
                    </div>
                    <div className={styles.frameDiv34}>
                        <div className={styles.unitedWeStandDividedWeFa}>
                            United we stand, divided we fall. Forge powerful alliances with
                            global players and grow faster!
                        </div>
                    </div>
                    <div className={styles.helmet1Div}>
                        <img className={styles.groupIcon23} alt="" src="/assets/imgs/group3.svg" />
                    </div>
                </div>
            </div>
            <img className={styles.recIcon1} alt="" src="/assets/imgs/rec.svg" />
            <div className={styles.frameDiv41}>
                <div className={styles.gameImgDiv}>
                    <img className={styles.image6Icon} alt="" src="/assets/imgs/image-6@2x.png" />
                </div>
                <div className={styles.gameImgDiv}>
                    <img className={styles.image6Icon} alt="" src="/assets/imgs/image-7@2x.png" />
                </div>
                <div className={styles.gameImgDiv}>
                    <img className={styles.image6Icon} alt="" src="/assets/imgs/image-7@2x.png" />
                </div>
                <div className={styles.gameImgDiv}>
                    <img className={styles.image6Icon} alt="" src="/assets/imgs/image-7@2x.png" />
                </div>
                <div className={styles.gameImgDiv}>
                    <img className={styles.image6Icon} alt="" src="/assets/imgs/image-7@2x.png" />
                </div>
                <div className={styles.gameImgDiv}>
                    <img className={styles.image6Icon} alt="" src="/assets/imgs/image-7@2x.png" />
                </div>
                <div className={styles.gameImgDiv}>
                    <img className={styles.image6Icon} alt="" src="/assets/imgs/image-7@2x.png" />
                </div>
                <div className={styles.gameImgDiv}>
                    <img className={styles.image6Icon} alt="" src="/assets/imgs/image-7@2x.png" />
                </div>
            </div>
            <img className={styles.navigationIcon} alt="" src="/assets/imgs/navigation.svg" />
            <img className={styles.navigationIcon1} alt="" src="/assets/imgs/navigation1.svg" />
            <img
                className={styles.vector5Stroke18}
                alt=""
                src="/assets/imgs/vector-5-stroke40.svg"
            />
            <img className={styles.vectorIcon6} alt="" src="/assets/imgs/vector-154.svg" />
            <img className={styles.vectorIcon7} alt="" src="/assets/imgs/vector-156.svg" />
            <img className={styles.ellipseIcon} alt="" src="/assets/imgs/ellipse-1.svg" />
            <img className={styles.ellipseIcon1} alt="" src="/assets/imgs/ellipse-1.svg" />
            <img className={styles.ellipseIcon2} alt="" src="/assets/imgs/ellipse-1.svg" />
            <img className={styles.ellipseIcon3} alt="" src="/assets/imgs/ellipse-1.svg" />
            <img className={styles.ellipseIcon4} alt="" src="/assets/imgs/ellipse-1.svg" />
            <img className={styles.ellipseIcon5} alt="" src="/assets/imgs/ellipse-1.svg" />
            <div className={styles.frameDiv42}>
                <div className={styles.component20Div}>
                    <img
                        className={styles.rectangleIcon18}
                        alt=""
                        src="/assets/imgs/rectangle-29@2x.png"
                    />
                    <div className={styles.shahidPervaizDiv}>Shahid Pervaiz</div>
                    <div className={styles.cEOCoFounder}>{`CEO & Co-founder`}</div>
                    <img className={styles.ellipseIcon6} alt="" src="/assets/imgs/ellipse-74.svg" />
                </div>
                <div className={styles.component20Div}>
                    <img
                        className={styles.rectangleIcon18}
                        alt=""
                        src="/assets/imgs/rectangle-291@2x.png"
                    />
                    <div className={styles.shahidPervaizDiv}>Shahid Pervaiz</div>
                    <div className={styles.cEOCoFounder}>{`CEO & Co-founder`}</div>
                    <img className={styles.ellipseIcon6} alt="" src="/assets/imgs/ellipse-75.svg" />
                </div>
                <div className={styles.component20Div}>
                    <img
                        className={styles.rectangleIcon18}
                        alt=""
                        src="/assets/imgs/rectangle-292@2x.png"
                    />
                    <div className={styles.shahidPervaizDiv}>Shahid Pervaiz</div>
                    <div className={styles.cEOCoFounder}>{`CEO & Co-founder`}</div>
                    <img className={styles.ellipseIcon6} alt="" src="/assets/imgs/ellipse-76.svg" />
                </div>
                <div className={styles.component20Div}>
                    <img
                        className={styles.rectangleIcon18}
                        alt=""
                        src="/assets/imgs/rectangle-293@2x.png"
                    />
                    <div className={styles.shahidPervaizDiv}>Shahid Pervaiz</div>
                    <div className={styles.cEOCoFounder}>{`CEO & Co-founder`}</div>
                    <img className={styles.ellipseIcon6} alt="" src="/assets/imgs/ellipse-77.svg" />
                </div>
            </div>
            <div className={styles.marketSlideDiv}>
                <div className={styles.marketSecDiv}>
                    <div className={styles.frameDiv43}>
                        <div className={styles.sep2021Div}>{`Sell & Rent Land`}</div>
                        <div className={styles.turnEvery11thCapturedLand}>
                            Turn every 11th captured land into a NFT. Use it in gameplay, or
                            sell it or give on rent to other players to earn passive income!
                        </div>
                    </div>
                    <div className={styles.frameDiv24}>
                        <div className={styles.sep2021Div}>
                            Tactically Deploy Artilleries
                        </div>
                    </div>
                    <div className={styles.frameDiv24}>
                        <div className={styles.sep2021Div}>Mint NFTs</div>
                    </div>
                    <div className={styles.frameDiv24}>
                        <div className={styles.sep2021Div}>Play in Leagues</div>
                    </div>
                </div>
                <div className={styles.marketSecImgDiv}>
                    <div className={styles.groupDiv21}>
                        <img
                            className={styles.rectangleIcon22}
                            alt=""
                            src="/assets/imgs/rectangle-301.svg"
                        />
                        <img
                            className={styles.pngegg31}
                            alt=""
                            src="/assets/imgs/pngegg-3-1@2x.png"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.groupDiv22}>
                <div className={styles.rectangleDiv6} />
                <div className={styles.rectangleDiv7} />
                <div className={styles.rectangleDiv8} />
                <div className={styles.rectangleDiv9} />
                <img className={styles.image1Icon1} alt="" src="/assets/imgs/image-1@2x.png" />
                <div className={styles.rectangleDiv7} />
                <div className={styles.frameDiv47}>
                    <img className={styles.medium1Icon} alt="" src="/assets/imgs/social.svg" />
                    <img className={styles.medium1Icon} alt="" src="/assets/imgs/social1.svg" />
                    <img className={styles.medium1Icon} alt="" src="/assets/imgs/social2.svg" />
                    <img className={styles.medium1Icon} alt="" src="/assets/imgs/social3.svg" />
                </div>
                <div className={styles.rectangleDiv11} />
                <div className={styles.component1Div}>
                    <div className={styles.menuTextDiv}>
                        <a
                            className={styles.tokenomicsA}
                            href="https://leagueofempires.zendesk.com/hc/en-us/articles/5343776721053-Tokenomics-chart"
                            target="_blank"
                        >
                            Tokenomics
                        </a>
                        <div className={styles.tokenomicsDiv1}>Tokenomics</div>
                    </div>
                    <img className={styles.rec3Icon} alt="" src="/assets/imgs/rec2.svg" />
                </div>
                <div className={styles.component1Div1}>
                    <div className={styles.menuTextDiv}>
                        <a
                            className={styles.whitepaper}
                            href="https://leagueofempires.zendesk.com/hc/en-us"
                            target="_blank"
                        >
                            Whitepaper
                        </a>
                        <div className={styles.whitepaperDiv}>Whitepaper</div>
                    </div>
                    <img className={styles.rec3Icon} alt="" src="/assets/imgs/rec2.svg" />
                </div>
                <div className={styles.component1Div2}>
                    <div
                        className={styles.menuTextDiv2}
                        onClick={onMenuTextContainer2Click}
                    >
                        <div className={styles.marketplaceDiv}>Marketplace</div>
                        <div className={styles.marketplaceDiv1}>Marketplace</div>
                    </div>
                    <img className={styles.rec3Icon} alt="" src="/assets/imgs/rec2.svg" />
                </div>
                <div
                    className={styles.component1Div3}
                    onClick={onComponent1Container3Click}
                >
                    <div className={styles.menuTextDiv}>
                        <div className={styles.teamDiv}>Team</div>
                        <div className={styles.teamDiv1}>Team</div>
                    </div>
                    <img className={styles.rec3Icon} alt="" src="/assets/imgs/rec2.svg" />
                </div>
            </div>
            <div className={styles.cwDiv1}>
                <div className={styles.frameDiv14}>
                    <div className={styles.cONNECTWALLETDiv}>CONNECT WALLET</div>
                </div>
            </div>
        </div>
    )
}
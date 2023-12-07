import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ItemDetail.module.css";

export const ItemDetail = () => {
    const navigate = useNavigate();

    const onFrameContainer11Click = useCallback(() => {
        navigate("/marketplace");
    }, [navigate]);

    const onImage11Click = useCallback(() => {
        navigate("/home-img");
    }, [navigate]);
    return (
        <div className={styles.itemDetailDiv}>
            <div className={styles.groupDiv}>
                <img className={styles.image50Icon} alt="" src="/assets/imgs/image-501@2x.png" />
                <img className={styles.image53Icon} alt="" src="/assets/imgs/image-56@2x.png" />
                <img className={styles.image54Icon} alt="" src="/assets/imgs/image-542@2x.png" />
            </div>
            <div className={styles.frameDiv}>
                <div className={styles.groupDiv1}>
                    <img className={styles.image1Icon} alt="" src="/assets/imgs/image-1@2x.png" />
                    <div className={styles.frameDiv1}>
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
                <div className={styles.frameDiv2}>
                    <img className={styles.vectorIcon} alt="" src="/assets/imgs/vector.svg" />
                    <img className={styles.vectorIcon1} alt="" src="/assets/imgs/vector5.svg" />
                    <img className={styles.medium1Icon} alt="" src="/assets/imgs/medium-11.svg" />
                    <img className={styles.vectorIcon2} alt="" src="/assets/imgs/vector6.svg" />
                </div>
                <div className={styles.allRightReservedCopyrigh}>
                    All Right Reserved. © Copyright 2022
                </div>
                <div className={styles.rectangleDiv} />
                <img className={styles.rec2Icon} alt="" src="/assets/imgs/rec2.svg" />
                <img className={styles.rec2Icon1} alt="" src="/assets/imgs/rec2.svg" />
                <img className={styles.rec2Icon2} alt="" src="/assets/imgs/rec2.svg" />
                <img className={styles.rec2Icon3} alt="" src="/assets/imgs/rec2.svg" />
            </div>
            <img className={styles.image53Icon1} alt="" src="/assets/imgs/image-56@2x.png" />
            <img className={styles.image26Icon} alt="" src="/assets/imgs/image-261@2x.png" />
            <div className={styles.rectangleDiv1} />
            <div className={styles.rectangleDiv2} />
            <div className={styles.rectangleDiv3} />
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
            <div className={styles.rectangleDiv6} />
            <div className={styles.everyFightFor}>Every fight for</div>
            <div className={styles.resourcesDiv}>Resources</div>
            <div className={styles.loETokensDiv}>LoE Tokens</div>
            <div className={styles.rewardsDiv}>Rewards</div>
            <div className={styles.skillMasteryDiv}>Skill Mastery</div>
            <img className={styles.rectangleIcon} alt="" src="/assets/imgs/rectangle-201.svg" />
            <img
                className={styles.rectangleIcon1}
                alt=""
                src="/assets/imgs/rectangle-201.svg"
            />
            <img
                className={styles.rectangleIcon2}
                alt=""
                src="/assets/imgs/rectangle-870.svg"
            />
            <img
                className={styles.rectangleIcon3}
                alt=""
                src="/assets/imgs/rectangle-201.svg"
            />
            <div className={styles.sHARPNELCatapultDiv}>sHARPNEL Catapult</div>
            <img className={styles.pngegg21} alt="" src="/assets/imgs/pngegg-2-1@2x.png" />
            <div className={styles.earnAutomaticStakingRewards}>
                Earn automatic staking rewards before the Arena launch. Earn passive
                royalties from every battle transaction after the Arena launch.
            </div>
            <img className={styles.ellipseIcon} alt="" src="/assets/imgs/ellipse-8.svg" />
            <div className={styles.groupDiv2}>
                <div className={styles.leftDiv}>240 left</div>
                <div className={styles.uSDDiv}>
                    <span>{`199 `}</span>
                    <span className={styles.uSDSpan}>USD</span>
                </div>
            </div>
            <div className={styles.amountDiv}>Amount</div>
            <div className={styles.paymentOptionsDiv}>Payment options</div>
            <div className={styles.mapProbabilityDiv}>Map Probability</div>
            <div className={styles.frameDiv3}>
                <div className={styles.frameDiv4}>
                    <div className={styles.playersMapDiv}>2 Players Map</div>
                    <div className={styles.div}>90%</div>
                </div>
                <div className={styles.frameDiv4}>
                    <div className={styles.playersMapDiv}>3 Players Map</div>
                    <div className={styles.div}>8%</div>
                </div>
                <div className={styles.frameDiv4}>
                    <div className={styles.playersMapDiv}>4 Players Map</div>
                    <div className={styles.div}>2%</div>
                </div>
                <div className={styles.frameDiv4}>
                    <div className={styles.playersMapDiv}>6 Players Map</div>
                    <div className={styles.div}>0%</div>
                </div>
            </div>
            <div className={styles.applyDiscountDiv}>Apply discount</div>
            <div className={styles.howToBuy}>How to buy?</div>
            <div className={styles.calculateRevenueDiv}>Calculate revenue</div>
            <div className={styles.priceDiv}>Price</div>
            <div className={styles.uSDDiv1}>
                <span>{`199 `}</span>
                <span className={styles.uSDSpan1}>USD</span>
            </div>
            <div className={styles.frameDiv8}>
                <div className={styles.groupDiv3}>
                    <img
                        className={styles.rectangleIcon4}
                        alt=""
                        src="/assets/imgs/rectangle-114.svg"
                    />
                    <div className={styles.div4}>-</div>
                </div>
                <div className={styles.frameDiv9}>
                    <div className={styles.tokenomicsDiv}>2</div>
                </div>
                <div className={styles.groupDiv3}>
                    <img
                        className={styles.rectangleIcon4}
                        alt=""
                        src="/assets/imgs/rectangle-115.svg"
                    />
                    <div className={styles.div6}>+</div>
                </div>
            </div>
            <div className={styles.frameDiv10}>
                <div className={styles.tUSDTDiv}>tUSDT</div>
                <img className={styles.arrowDownIcon} alt="" src="/assets/imgs/arrowdown.svg" />
            </div>
            <div className={styles.totalDiv}>Total</div>
            <div className={styles.uSDDiv2}>
                <span>{`398 `}</span>
                <span className={styles.uSDSpan1}>USD</span>
            </div>
            <div className={styles.frameDiv11} onClick={onFrameContainer11Click}>
                <img
                    className={styles.navigationIcon}
                    alt=""
                    src="/assets/imgs/navigation2.svg"
                />
                <div className={styles.backDiv}>Back</div>
            </div>
            <div className={styles.buttonDiv}>
                <img
                    className={styles.rectangleIcon6}
                    alt=""
                    src="/assets/imgs/rectangle-116.svg"
                />
                <div className={styles.vISITMARKETPLACEDiv}>PAY WITH tUSDT</div>
            </div>
            <div className={styles.buttonDiv1}>
                <img
                    className={styles.rectangleIcon6}
                    alt=""
                    src="/assets/imgs/rectangle-117.svg"
                />
                <div className={styles.vISITMARKETPLACEDiv1}>
                    direct transfer to l.o.e wallet
                </div>
            </div>
            <img
                className={styles.rectangleIcon8}
                alt=""
                src="/assets/imgs/rectangle-118.svg"
            />
            <div className={styles.gENERATEARENAGENESISNFTROY}>
                GENERATE ARENA GENESIS NFT ROYALTIES
            </div>
            <div className={styles.orDiv}>or</div>
            <div className={styles.groupDiv5}>
                <div className={styles.rectangleDiv7} />
                <div className={styles.enterYourEmail}>Enter your email</div>
                <div className={styles.cwDiv}>
                    <div className={styles.frameDiv12}>
                        <div className={styles.cONNECTWALLETDiv}>SubScribe</div>
                    </div>
                </div>
            </div>
            <div className={styles.subscribeToOurMailingList}>
                Subscribe to our mailing list
            </div>
            <div className={styles.groupDiv6}>
                <img
                    className={styles.vector5Stroke}
                    alt=""
                    src="/assets/imgs/vector-5-stroke19.svg"
                />
                <img
                    className={styles.vector5Stroke1}
                    alt=""
                    src="/assets/imgs/vector-5-stroke20.svg"
                />
                <div className={styles.hOWCANIEARN}>HOW CAN I EARN?</div>
            </div>
            <div className={styles.automaticStakingRewardsBefo}>
                Automatic staking rewards before launch
            </div>
            <div className={styles.earlyInvestorsWillHaveRece}>
                Early investors will have received up to
            </div>
            <div className={styles.fromLoENFTStakingRewards}>
                from LoE NFT Staking rewards
            </div>
            <div className={styles.onceBattleArenaGoesLiveIt}>
                Once Battle Arena goes Live it will also unlock your staked NFTs
            </div>
            <div className={styles.div7}>88,99%</div>
            <div className={styles.aPYDiv}>APY</div>
            <div className={styles.passiveIncomeFromEveryActi}>
                Passive income from every action within Arena after launch
            </div>
            <img className={styles.ellipseIcon1} alt="" src="/assets/imgs/ellipse-9.svg" />
            <img className={styles.vectorIcon3} alt="" src="/assets/imgs/vector-157.svg" />
            <img className={styles.vectorIcon4} alt="" src="/assets/imgs/vector-158.svg" />
            <div className={styles.groupDiv7}>
                <div className={styles.rectangleDiv8} />
                <div className={styles.rectangleDiv9} />
                <div className={styles.rectangleDiv10} />
                <div className={styles.rectangleDiv11} />
                <img
                    className={styles.image1Icon1}
                    alt=""
                    src="/assets/imgs/image-110@2x.png"
                    onClick={onImage11Click}
                />
                <div className={styles.rectangleDiv9} />
                <div className={styles.frameDiv13}>
                    <img className={styles.medium1Icon} alt="" src="/assets/imgs/social4.svg" />
                    <img className={styles.medium1Icon} alt="" src="/assets/imgs/social5.svg" />
                    <img className={styles.medium1Icon} alt="" src="/assets/imgs/social6.svg" />
                    <img className={styles.medium1Icon} alt="" src="/assets/imgs/social7.svg" />
                </div>
                <div className={styles.rectangleDiv13} />
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
                    <img className={styles.recIcon} alt="" src="/assets/imgs/rec5.svg" />
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
                    <img className={styles.recIcon} alt="" src="/assets/imgs/rec5.svg" />
                </div>
                <div className={styles.component1Div2}>
                    <div className={styles.menuTextDiv}>
                        <div className={styles.marketplaceDiv}>Marketplace</div>
                        <div className={styles.marketplaceDiv1}>Marketplace</div>
                    </div>
                    <img className={styles.rec3Icon} alt="" src="/assets/imgs/rec32.svg" />
                </div>
                <div className={styles.component1Div3}>
                    <div className={styles.menuTextDiv}>
                        <div className={styles.teamDiv}>Team</div>
                        <div className={styles.teamDiv1}>Team</div>
                    </div>
                    <img className={styles.recIcon} alt="" src="/assets/imgs/rec5.svg" />
                </div>
            </div>
            <div className={styles.cwDiv1}>
                <div className={styles.frameDiv12}>
                    <div className={styles.cONNECTWALLETDiv}>CONNECT WALLET</div>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import Page from '../Page'
import VideoVimeo from '../VideoVimeo'

export default function() {
    return (
        <Page>
            <h1>Freedom Portal</h1>
            <p>​The Freedom Portal project was developed in collaboration with <a href="https://tim-shaw.net/">Tim Shaw</a> as a platform to organize unauthorized shows in the public space. 
            It was first prototyped in a residency at <a href="https://www.stereolux.org/">Stereolux</a></p>
            <p>The platform works in the following way :
                <ul>
                    <li>We choose a public venue where to organize a show.</li>
                    <li>We create there an official-looking WiFi network, by plugging-in wireless routers to sockets on the wall.</li>
                    <li>We let visitors be tricked into connecting to this network. They will unintentionally experience the installation as it pops-up onto their phones.</li>
                </ul>
            </p>
            {/* <p>Wi-Fi networks populate our urban environments and create intersecting boundaries within physical space. These territories provide us with new and interesting topographies especially if we consider the creative potential of these new spaces.</p>
            <p>Captive portals provide a temporary gateway to the Internet, generally a place for businesses to harvest data but for us a place to provocatively host digital artworks.</p>
 */}

            <h2>Third Space Helsinki collaboration</h2>

            <VideoVimeo videoId="254006804" />

            <p>Throughout 2017, in collaboration with <a href="http://www.th1rdspac3.com/">Third Space</a> and artists Minna Henriksson and Steve Maher, we produced three works targeting the three biggest art museums in Finland : <b>Kiasma, Ateneum and Kansallismuseo</b>. Each work was a rip-off of the museum's official web page, assuming the identity of the institution in order to challenge some of its positions. Together these installations received about 4500 visitors and each lasted for about a month until they were discovered and removed by the museum's staff.</p>

            <h3>Ateneum | Minna Henriksson | Scientific illustrations to keep silent about</h3>
            <p>
                The intervention adds to knowledge about the oeuvre of the widely loved von Wright brothers, whose blockbuster exhibition opened in Ateneum in October 2017. In the WiFi network of Ateneum we could see what the exhibition didn’t show. Such were Wilhelm von Wright’s racial studies of Rufina in 1843. Rufina was a 10 years old girl, shipped from Argentina to Sweden all by herself on request of race scientist Anders Retzius, who needed “an indigenous specimen”. After the drawings and measurements, she was given to an upper class family in Gothenburg as servant. <a href="http://minnahenriksson.com">http://minnahenriksson.com</a>
            </p>
            <p>
                <img src="/images/projects/freedom-portal-8.png" />
            </p>

            <h3>Kansallismuseo | Steve Maher | Nórë Carmëcoa</h3>
            <p>
                The Finnish National Museum's website Translated to Tolkien's High Elvish, Quenya, which is based on Finnish. The project reflects on the nature of national institutions as venues through which state actors mythpoecise the past in the process of building national identity. <a href="http://www.stevemaher.net/">http://www.stevemaher.net/</a>
            </p>
            <p>
                <img src="/images/projects/freedom-portal-9.png" />
            </p>

            <h3>Kiasma | Third Space collective | Un-allowed Open Call</h3>
            <p>
                Installed during the "ARS17 - Hello World!" exhibition. Each visitor can submit their artworks as a file, and these would be (supposedly) considered for inclusion into Kiasma's permanent exhibition. Large parts of the open call text are directly copied from the actual website of Kiasma.
            </p>
            <p>
                <img src="/images/projects/freedom-portal-10.png" />
            </p>

            <h2>Electropixel</h2>
            <p>We installed three works as part of <a href="http://electropixel.org/tim-shaw-sebastien-piquemal/">electropixel #6</a> in Nantes, 2016.</p>

            <h3>Sébastien Piqumal | wlandalisme</h3>
            <p>
                This piece allows participants to vandalize the public Wi-Fi space by posting a small message of less than 32 characters. Once submitted their text will appear as an available network in that area.
                To submit your own message connect to the network “wlandalisme”, open a web page, write a message and click on the button to post it. If you fail to post, check that you are still connected to the “wlandalisme” Wi-Fi and try one more time. Then open your phone’s settings to display the list of available Wi-Fi networks in the area. Your message might take a little while to appear.
            </p>
            <p>
                <img src="/images/projects/freedom-portal-2.jpg" /> 
            </p>

            <h3>Tom Schofield | 192.168.0.1:Where the WiFi comes from</h3>
            <p>
                ‘192.168.0.1:Where the Wi-Fi Comes From’ takes a live image grab of the router at the time of accessing the network. Instead of allowing access to the wider Internet the router remains locked in a self-referential and exhibitionist cycle. The time of access is presented to the user referencing the complex temporal interdependencies of networked technologies.
            </p>
            <p>
                <img src="/images/projects/freedom-portal-4.jpg" /> 
            </p>

            <h3>Antonio Roberts – Freemium Basics</h3>
            <p>
                “If you are not paying for it, you’re not the customer; you’re the product being sold”. This phrase said by Andrew Lewis aka blue_beetle
                in 2010 should make any user wary of using free services. The promises of corporations offering “exclusive” “premium” gifts – loyalty cards, free wifi, vouchers etc – is that it will make your life better, easier, help you, help others, and ultimately make the world a better place.

                By accepting these “gifts” we give permission to these corporations to enter our lives, track our social, spending, and general living habits. With this information they can greatly influence the opinion and habits of us and our social circles. These free “gifts”, then, come at a price.

                Using Free Basics (previously Internet.org) as its target, which is Facebook’s failed attempt to gift “free internet” to India, Freemium Basics sheds light on the dangers of clicking “I Accept” on free services without considering the costs.
            </p>            
            <p>
                <img src="/images/projects/freedom-portal-3.jpg" />
            </p>
            
            <h2>Supports</h2>
            <a href="https://www.taike.fi">Taike</a> | <a href="https://tokyo.fi/kipsari">Kipsari</a> | <a href="https://www.stereolux.org/">Stereolux</a>

            <h2>Links</h2>
            <ul>
                <li><a href="https://github.com/sebpiq/FreedomPortal">Source code and instructions to install the system</a></li>
            </ul>
        </Page>
    )
}

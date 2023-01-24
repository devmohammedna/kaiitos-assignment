import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { RectangleImg } from "../../images";

const ContentSide = () => {
  return (
    <Grid item md={6} mb={{ xs: 4, md: 0 }}>
      <Stack direction={"column"} spacing={2} textAlign={"center"}>
        <Box
          mx={"auto"}
          width={{ xs: "280px", sm: "380px" }}
          border={"6px solid #5E1539"}
          height={"200px"}
          bgcolor={"#55BEB7"}
          position={"relative"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            position={"absolute"}
            right={"-24px"}
            top={"50%"}
            sx={{ transform: "translateY(-50%)" }}
            width={"40px"}
            height={"90px"}
            overflow={"hidden"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="90px"
              viewBox="0 0 96.365 219.305"
            >
              <g
                id="Shape"
                transform="translate(-1285.74 -593.954)"
                fill="#d05296"
              >
                <path
                  d="M 1355.980590820312 806.7593383789062 C 1350.746948242188 806.7593383789062 1345.82421875 804.7345581054688 1342.119384765625 801.0580444335938 L 1335.693237304688 794.680419921875 L 1333.919677734375 792.9202880859375 L 1332.146362304688 794.6802978515625 L 1325.718994140625 801.0581665039062 C 1322.014404296875 804.7344970703125 1317.092407226562 806.7593383789062 1311.85986328125 806.7593383789062 C 1306.626708984375 806.7593383789062 1301.704345703125 804.7344970703125 1297.99951171875 801.0579223632812 C 1294.285522460938 797.3720092773438 1292.240112304688 792.4623413085938 1292.240112304688 787.2332763671875 C 1292.239990234375 782.004150390625 1294.285400390625 777.0944213867188 1297.999389648438 773.4085083007812 L 1304.426635742188 767.03076171875 L 1306.129638671875 765.3405151367188 L 1304.425659179688 763.6494750976562 L 1297.999389648438 757.27197265625 C 1294.285400390625 753.5859985351562 1292.239990234375 748.6763305664062 1292.240112304688 743.447265625 C 1292.240112304688 738.2181396484375 1294.285400390625 733.3084716796875 1297.999389648438 729.6226196289062 C 1301.704956054688 725.9453125 1306.627319335938 723.9202270507812 1311.85986328125 723.9202270507812 C 1317.091796875 723.9202270507812 1322.013793945312 725.9453125 1325.71923828125 729.6224365234375 L 1332.145874023438 735.999755859375 L 1333.919677734375 737.76025390625 L 1335.693237304688 736.0001220703125 L 1342.119140625 729.6226806640625 C 1345.824829101562 725.9452514648438 1350.74755859375 723.9202270507812 1355.980590820312 723.9202270507812 C 1361.212524414062 723.9202270507812 1366.134521484375 725.9453125 1369.839965820312 729.6224365234375 C 1373.55419921875 733.3079833984375 1375.599975585938 738.2177124023438 1375.600219726562 743.4468383789062 C 1375.600341796875 748.676025390625 1373.555053710938 753.5858764648438 1369.840942382812 757.2719116210938 L 1363.41259765625 763.6499633789062 L 1361.70947265625 765.3402099609375 L 1363.413330078125 767.0311889648438 L 1369.839721679688 773.4081420898438 C 1373.557495117188 777.09619140625 1375.605224609375 782.0064086914062 1375.605224609375 787.233642578125 C 1375.605224609375 792.4577026367188 1373.557983398438 797.366943359375 1369.840698242188 801.0571899414062 C 1366.135131835938 804.7344970703125 1361.213134765625 806.7593383789062 1355.980590820312 806.7593383789062 Z M 1355.980590820312 683.293701171875 C 1350.748413085938 683.293701171875 1345.826049804688 681.269287109375 1342.120239257812 677.5933837890625 L 1335.693237304688 671.2147216796875 L 1333.91943359375 669.4542846679688 L 1332.14599609375 671.214111328125 L 1325.719360351562 677.5922241210938 C 1322.014404296875 681.2689819335938 1317.092407226562 683.293701171875 1311.85986328125 683.293701171875 C 1306.628051757812 683.293701171875 1301.7060546875 681.2692260742188 1298.000366210938 677.59326171875 C 1294.285278320312 673.905517578125 1292.239990234375 668.9957885742188 1292.240112304688 663.7670288085938 C 1292.240112304688 658.538330078125 1294.285278320312 653.6286010742188 1297.9990234375 649.9423828125 L 1304.426635742188 643.5642700195312 L 1306.129638671875 641.8740234375 L 1304.425659179688 640.1829833984375 L 1297.999389648438 633.8054809570312 C 1294.28564453125 630.1197509765625 1292.240234375 625.21044921875 1292.240112304688 619.9818725585938 C 1292.239868164062 614.7529296875 1294.285034179688 609.8429565429688 1297.9990234375 606.156494140625 C 1301.705932617188 602.4790649414062 1306.628051757812 600.45458984375 1311.85986328125 600.45458984375 C 1317.091796875 600.45458984375 1322.013793945312 602.479736328125 1325.71923828125 606.1569213867188 L 1332.145874023438 612.5341186523438 L 1333.919677734375 614.2943725585938 L 1335.693481445312 612.5341796875 L 1342.118774414062 606.156494140625 C 1345.825927734375 602.4790649414062 1350.748291015625 600.45458984375 1355.980590820312 600.45458984375 C 1361.211791992188 600.45458984375 1366.133422851562 602.4790649414062 1369.839111328125 606.1551513671875 C 1373.554565429688 609.8424682617188 1375.600219726562 614.75244140625 1375.600219726562 619.9815063476562 C 1375.600219726562 625.210205078125 1373.554809570312 630.11962890625 1369.840942382812 633.805419921875 L 1363.41259765625 640.1834106445312 L 1361.70947265625 641.8737182617188 L 1363.413330078125 643.564697265625 L 1369.839721679688 649.941650390625 C 1373.557739257812 653.6314086914062 1375.605224609375 658.5413208007812 1375.605224609375 663.76708984375 C 1375.605224609375 668.9916381835938 1373.557983398438 673.9012451171875 1369.8408203125 677.591552734375 C 1366.135131835938 681.2689819335938 1361.213012695312 683.293701171875 1355.980590820312 683.293701171875 Z"
                  stroke="none"
                />
                <path
                  d="M 1355.98046875 800.2594604492188 C 1359.486206054688 800.2594604492188 1362.781982421875 798.90478515625 1365.26123046875 796.444091796875 C 1367.740112304688 793.9837036132812 1369.105224609375 790.7130126953125 1369.105224609375 787.2337036132812 C 1369.105224609375 783.7540893554688 1367.740844726562 780.48193359375 1365.26123046875 778.0219116210938 L 1352.482299804688 765.3401489257812 L 1365.262329101562 752.6583862304688 C 1370.379760742188 747.5794067382812 1370.379760742188 739.3148193359375 1365.26123046875 734.2362060546875 C 1362.781982421875 731.7755126953125 1359.486206054688 730.420166015625 1355.98046875 730.420166015625 C 1352.47412109375 730.420166015625 1349.177612304688 731.7755126953125 1346.697998046875 734.2362060546875 L 1333.919799804688 746.9180297851562 L 1321.140502929688 734.2362060546875 C 1318.661254882812 731.7755126953125 1315.365478515625 730.420166015625 1311.85986328125 730.420166015625 C 1308.353393554688 730.420166015625 1305.0576171875 731.7755126953125 1302.578002929688 734.2362060546875 C 1297.460571289062 739.3148193359375 1297.460571289062 747.5794067382812 1302.578002929688 752.6583862304688 L 1315.357299804688 765.3401489257812 L 1302.578002929688 778.0219116210938 C 1297.460571289062 783.1008911132812 1297.460571289062 791.365478515625 1302.578002929688 796.444091796875 C 1305.0576171875 798.90478515625 1308.353393554688 800.2594604492188 1311.85986328125 800.2594604492188 C 1315.365478515625 800.2594604492188 1318.661254882812 798.90478515625 1321.140502929688 796.444091796875 L 1333.919799804688 783.7622680664062 L 1346.697998046875 796.444091796875 C 1349.177612304688 798.90478515625 1352.47412109375 800.2594604492188 1355.98046875 800.2594604492188 M 1355.98046875 676.793701171875 C 1359.486206054688 676.793701171875 1362.781982421875 675.4390869140625 1365.26123046875 672.9786987304688 C 1367.740112304688 670.5180053710938 1369.105224609375 667.24658203125 1369.105224609375 663.7669067382812 C 1369.105224609375 660.2876586914062 1367.740844726562 657.0162353515625 1365.26123046875 654.5554809570312 L 1352.482299804688 641.8737182617188 L 1365.262329101562 629.1919555664062 C 1370.379760742188 624.1129760742188 1370.379760742188 615.8494262695312 1365.26123046875 610.769775390625 C 1362.781982421875 608.3101196289062 1359.486206054688 606.9544067382812 1355.98046875 606.9544067382812 C 1352.47412109375 606.9544067382812 1349.177612304688 608.3101196289062 1346.697998046875 610.769775390625 L 1333.919799804688 623.4515991210938 L 1321.140502929688 610.7705078125 C 1318.661254882812 608.3101196289062 1315.365478515625 606.9544067382812 1311.85986328125 606.9544067382812 C 1308.353393554688 606.9544067382812 1305.0576171875 608.3101196289062 1302.578002929688 610.769775390625 C 1297.460571289062 615.8494262695312 1297.460571289062 624.1129760742188 1302.578002929688 629.1919555664062 L 1315.357299804688 641.8737182617188 L 1302.578002929688 654.5554809570312 C 1297.460571289062 659.6351318359375 1297.460571289062 667.8990478515625 1302.578002929688 672.9786987304688 C 1305.0576171875 675.4383544921875 1308.353393554688 676.793701171875 1311.85986328125 676.793701171875 C 1315.365478515625 676.793701171875 1318.661254882812 675.4390869140625 1321.140502929688 672.9786987304688 L 1333.919799804688 660.2965698242188 L 1346.697998046875 672.9786987304688 C 1349.177612304688 675.4383544921875 1352.47412109375 676.793701171875 1355.98046875 676.793701171875 M 1355.98046875 813.2594604492188 C 1349.020141601562 813.2594604492188 1342.471557617188 810.5648193359375 1337.540893554688 805.6715698242188 L 1333.919555664062 802.0778198242188 L 1330.296997070312 805.6723022460938 C 1325.368041992188 810.564453125 1318.819458007812 813.2594604492188 1311.85986328125 813.2594604492188 C 1304.900146484375 813.2594604492188 1298.3515625 810.5648193359375 1293.4208984375 805.6715698242188 C 1288.467651367188 800.7562255859375 1285.740112304688 794.2080078125 1285.739868164062 787.2337036132812 C 1285.739868164062 780.2587280273438 1288.46728515625 773.7105102539062 1293.420532226562 768.7947998046875 L 1296.90185546875 765.3405151367188 L 1293.420532226562 761.885498046875 C 1288.46728515625 756.9697875976562 1285.739868164062 750.4215698242188 1285.739868164062 743.4465942382812 C 1285.740112304688 736.4722900390625 1288.467651367188 729.924072265625 1293.4208984375 725.0087280273438 C 1298.351928710938 720.1151733398438 1304.900512695312 717.420166015625 1311.85986328125 717.420166015625 C 1318.819091796875 717.420166015625 1325.367309570312 720.115478515625 1330.29833984375 725.0094604492188 L 1333.919555664062 728.6026611328125 L 1337.54052734375 725.0090942382812 C 1342.471923828125 720.1151733398438 1349.020874023438 717.420166015625 1355.98046875 717.420166015625 C 1362.939819335938 717.420166015625 1369.488037109375 720.115478515625 1374.419067382812 725.0094604492188 C 1379.371215820312 729.9230346679688 1382.099853515625 736.47119140625 1382.100219726562 743.4458618164062 C 1382.100830078125 750.4208374023438 1379.373046875 756.9694213867188 1374.419799804688 761.885498046875 L 1370.9375 765.3405151367188 L 1374.41796875 768.7940673828125 C 1379.374755859375 773.7115478515625 1382.105224609375 780.260498046875 1382.105224609375 787.2337036132812 C 1382.105224609375 794.2037353515625 1379.37548828125 800.7515869140625 1374.419067382812 805.6708374023438 C 1369.48876953125 810.564453125 1362.940185546875 813.2594604492188 1355.98046875 813.2594604492188 Z M 1355.98046875 689.793701171875 C 1349.022338867188 689.793701171875 1342.47412109375 687.0997924804688 1337.54296875 682.2083740234375 L 1333.919311523438 678.612060546875 L 1330.297607421875 682.2062377929688 C 1325.367309570312 687.0990600585938 1318.819091796875 689.793701171875 1311.85986328125 689.793701171875 C 1304.901977539062 689.793701171875 1298.354125976562 687.0997924804688 1293.422973632812 682.2083740234375 C 1288.46728515625 677.2894287109375 1285.739868164062 670.7412109375 1285.739868164062 663.7672729492188 C 1285.739868164062 656.7930297851562 1288.46728515625 650.2448120117188 1293.419799804688 645.3291015625 L 1296.901977539062 641.8740234375 L 1293.4208984375 638.41943359375 C 1288.467651367188 633.5037231445312 1285.740112304688 626.9558715820312 1285.739868164062 619.98193359375 C 1285.739868164062 613.0076293945312 1288.466918945312 606.4594116210938 1293.419799804688 601.5433349609375 C 1298.3544921875 596.6483764648438 1304.90234375 593.9544067382812 1311.85986328125 593.9544067382812 C 1318.818359375 593.9544067382812 1325.366577148438 596.6494140625 1330.297607421875 601.5430297851562 L 1333.91943359375 605.1367797851562 L 1337.540161132812 601.5430297851562 C 1342.474487304688 596.6483764648438 1349.022338867188 593.9544067382812 1355.98046875 593.9544067382812 C 1362.93798828125 593.9544067382812 1369.48583984375 596.6487426757812 1374.4169921875 601.5408325195312 C 1379.371948242188 606.4583740234375 1382.100219726562 613.006591796875 1382.100219726562 619.981201171875 C 1382.100463867188 626.9555053710938 1379.372680664062 633.5033569335938 1374.419799804688 638.4190673828125 L 1370.9375 641.8739624023438 L 1374.41796875 645.32763671875 C 1379.375122070312 650.2469482421875 1382.105224609375 656.7955322265625 1382.105224609375 663.7669067382812 C 1382.105224609375 670.7373046875 1379.375854492188 677.28515625 1374.419799804688 682.2047729492188 C 1369.488037109375 687.0990600585938 1362.939819335938 689.793701171875 1355.98046875 689.793701171875 Z"
                  stroke="none"
                  fill="#5e1539"
                />
              </g>
            </svg>
          </Box>
          <Typography
            variant="h2"
            color="white"
            fontWeight={"700"}
            lineHeight={"53px"}
          >
            DESIGN <br />
            STUDIO
          </Typography>
          <Box
            position={"absolute"}
            bottom={"-28px"}
            left={"50%"}
            sx={{ transform: "translateX(-50%)" }}
          >
            <img src={RectangleImg} alt="RectangleImg" />
          </Box>
        </Box>
        <Typography
          variant="h5"
          color="#5E1539"
          fontWeight={"700"}
          mt={"40px !important"}
          mb={"0 !important"}
        >
          A team with big ideas
        </Typography>
        <Typography
          mb={"24px !important"}
          color="#5E1539"
          variant="h6"
          className="line-height-24px"
          textAlign={"center"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </Typography>
        <Box textAlign={"center"}>
          <Button className="CTA-Btn" variant="contained">
            <Typography
              variant="h6"
              color="white"
              fontWeight={700}
              textTransform={"none"}
            >
              Get in touch
            </Typography>
          </Button>
        </Box>
        <Box
          position={"absolute"}
          left={"-50px"}
          top={"57%"}
          display={{ xs: "none", md: "block" }}
          sx={{ transform: "translateY(-50%)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80px"
            height="400"
            viewBox="0 0 256.523 963.084"
          >
            <path
              id="Shape"
              d="M-128.252,1497.164l23.548-22.217L.01,1586.127l104.714-111.18,23.548,22.217L.01,1633.343Zm0-134.112,23.548-22.217L.01,1452.009l104.714-111.173,23.548,22.217L.01,1499.226Zm0-134.118,23.548-22.217L.01,1317.892l104.714-111.174,23.548,22.217L.01,1365.108Zm0-134.112,23.548-22.216L.01,1183.78l104.714-111.173,23.548,22.216L.01,1231Zm0-134.118,23.548-22.216L.01,1049.662,104.724,938.489l23.548,22.216L.01,1096.88Zm0-134.114,23.548-22.217L.01,915.551,104.724,804.374l23.548,22.217L.01,962.768Zm0-134.115L-104.7,670.26.01,781.437,104.724,670.26l23.548,22.216L.01,828.653Z"
              transform="translate(128.252 -670.26)"
              fill="#9c255d"
            />
          </svg>
        </Box>
        <Box
          display={{ xs: "none", md: "block" }}
          position={"absolute"}
          overflow={"hidden"}
          height={"100px"}
          bottom={0}
          left={"27%"}
          sx={{ transform: "translateX(-50%)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="250"
            viewBox="0 0 1140.21 542.93"
          >
            <path
              id="Shape"
              d="M1436.56,2365.731l17.628-17.662v17.662Zm-97.308,0,114.936-115.159v34.45l-80.554,80.709Zm-97.309,0,212.245-212.656v34.45l-177.862,178.206Zm-97.311,0,309.556-310.158v34.45l-275.173,275.708Zm-97.308,0,406.864-407.654v34.449l-372.481,373.2Zm-97.306,0,504.17-505.146v34.449L984.4,2365.731Zm-97.308,0,541.882-542.93h34.383l-541.882,542.93Zm-97.309,0,541.882-542.93h34.384l-541.882,542.93Zm-97.309,0,541.883-542.93h34.383l-541.882,542.93Zm-97.314,0,541.886-542.93h34.383l-541.886,542.93Zm-97.308,0,541.883-542.93h34.384l-541.883,542.93Zm-97.308,0L908.047,1822.8h34.384l-541.885,542.93Zm-52.184-45.212L810.739,1822.8h34.383L313.979,2354.969Zm0-97.5L713.426,1822.8h34.384L313.979,2257.47Zm0-97.5L616.117,1822.8H650.5L313.979,2159.973Zm0-97.5L518.809,1822.8h34.384L313.979,2062.477Zm0-97.5L421.5,1822.8h34.383l-141.9,142.178Zm0-97.5,10.213-10.233h34.384l-44.6,44.683Z"
              transform="translate(-313.979 -1822.801)"
              fill="#e8952e"
            />
          </svg>
        </Box>
      </Stack>
    </Grid>
  );
};

export default ContentSide;

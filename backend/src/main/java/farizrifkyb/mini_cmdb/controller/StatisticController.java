package farizrifkyb.mini_cmdb.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import farizrifkyb.mini_cmdb.model.response.StatisticsResponse;
import farizrifkyb.mini_cmdb.model.response.WebResponse;
import farizrifkyb.mini_cmdb.service.StatisticService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class StatisticController {

    private final StatisticService statisticService;

    @GetMapping("/api/statistics")
    public WebResponse<StatisticsResponse> getStatistics() {
        return WebResponse.<StatisticsResponse>builder().data(statisticService.getStatistics()).build();
    }
}

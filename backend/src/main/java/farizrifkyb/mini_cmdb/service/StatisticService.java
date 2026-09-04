package farizrifkyb.mini_cmdb.service;

import java.util.List;

import org.springframework.stereotype.Service;

import farizrifkyb.mini_cmdb.entity.Application;
import farizrifkyb.mini_cmdb.model.response.StatisticsResponse;
import farizrifkyb.mini_cmdb.repository.ApplicationGroupRepository;
import farizrifkyb.mini_cmdb.repository.ApplicationRepository;
import farizrifkyb.mini_cmdb.repository.IpRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StatisticService {
    
    private final ApplicationRepository applicationRepository;
    private final ApplicationGroupRepository applicationGroupRepository;
    private final IpRepository ipRepository;

    public StatisticsResponse getStatistics() {

        Long totalApplications = applicationRepository.count();
        Long totalApplicationGroups = applicationGroupRepository.count();
        Long totalIps = ipRepository.count();
        List<Application> recentApplications = applicationRepository.findTop3ByOrderByUpdatedAtDesc();

        return new StatisticsResponse(
                totalApplications,
                totalApplicationGroups,
                totalIps,
                recentApplications
            );
    }
}

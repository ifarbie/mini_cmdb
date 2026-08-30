package farizrifkyb.mini_cmdb.model.response;

import java.util.List;

import farizrifkyb.mini_cmdb.entity.Application;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StatisticsResponse {

    private Long totalApplications;
    
    private Long totalApplicationGroups;

    private Long totalIps;
    
    private List<Application> recentApplications;
}